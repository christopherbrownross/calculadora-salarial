const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API proxy para evitar problemas de CORS con APIs externas
app.get('/api/twilio-stock', async (req, res) => {
    try {
        // En producción, usar una API key real
        const response = await fetch('https://api.polygon.io/v1/open-close/TWLO/2023-01-09?adjusted=true&apikey=demo');
        
        if (!response.ok) {
            // Datos de fallback
            return res.json({
                close: 85.50,
                symbol: 'TWLO',
                status: 'demo'
            });
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Twilio stock:', error);
        res.json({
            close: 85.50,
            symbol: 'TWLO',
            status: 'fallback'
        });
    }
});

app.get('/api/exchange-rate', async (req, res) => {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        
        if (!response.ok) {
            return res.json({
                rates: { COP: 4100 },
                status: 'demo'
            });
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        res.json({
            rates: { COP: 4100 },
            status: 'fallback'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📊 Calculadora de Salario Neto lista para usar`);
});

module.exports = app;