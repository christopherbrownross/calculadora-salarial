# 💰 Calculadora de Salario Neto Colombia - Twilio RSUs

Una calculadora moderna y elegante para calcular el salario neto en Colombia, incluyendo RSUs de Twilio con datos financieros en tiempo real.

## ✨ Características

### 🎨 Diseño Moderno
- **Glassmorphism UI** con efectos de cristal y transparencias
- **Tema oscuro** con gradientes dinámicos
- **Completamente responsivo** para móviles y desktop
- **Animaciones suaves** y transiciones fluidas

### 📊 Datos Financieros en Tiempo Real
- **Precio de acciones TWLO** actualizado automáticamente
- **Tasa de cambio USD/COP** en tiempo real
- **Múltiples APIs** como respaldo para máxima confiabilidad
- **Sin datos simulados** - APIs reales sin restricciones CORS

### 🧮 Cálculos Precisos
- **Legislación colombiana 2025** aplicada correctamente
- **UVT 2025**: $49,800 COP
- **Salario mínimo 2025**: $1,423,500 COP
- **Beneficios tributarios** para medicina prepagada y seguros
- **Exenciones de alimentación** según normativa vigente

### 💼 Compensaciones Incluidas
- ✅ Salario base con formato de moneda
- ✅ Alimentación (exenta hasta 41 UVT si salario ≤ 310 UVT)
- ✅ Conectividad y deporte
- ✅ Seguro de vida (deducible hasta 16 UVT)
- ✅ Medicina prepagada (deducible hasta 16 UVT)
- ✅ Team lunch automático en USD
- ✅ RSUs de Twilio calculadas mensualmente

### 🏛️ Deducciones Legales
- 🔸 Salud (4%)
- 🔸 Pensión (4%)
- 🔸 Fondo de Solidaridad Pensional (según escala salarial)
- 🔸 Retención en la fuente (según tabla UVT)
- 🔸 Deducciones por medicina y seguros

## 🚀 APIs Utilizadas

### Precios de Acciones
- **FCS API** - Datos financieros sin CORS
- **Twelve Data** - API gratuita de mercados
- **Yahoo Finance** - Datos históricos y actuales
- **Marketstack** - Respaldo adicional

### Tasas de Cambio
- **ExchangeRate-API** - Tasas sin restricciones
- **Fixer.io** - API de divisas
- **CurrencyAPI** - Respaldo adicional

## 🛠️ Tecnologías

- **HTML5** con estructura semántica
- **CSS3** con variables personalizadas y Flexbox/Grid
- **JavaScript ES6+** con React Hooks
- **React 18** para componentes reactivos
- **Font Awesome** para iconografía
- **GitHub Pages** para despliegue automático

## 📱 Características de UX

- **Input de RSUs mejorado** sin flechas molestas
- **Formato de moneda automático** en todos los campos
- **Validación en tiempo real** de datos numéricos
- **Indicadores de carga** para APIs
- **Manejo de errores** elegante y informativo

## 🌐 Despliegue

La aplicación se despliega automáticamente en GitHub Pages mediante GitHub Actions:

1. **Push a main** → Despliegue automático
2. **Sin configuración manual** requerida
3. **HTTPS habilitado** por defecto
4. **CDN global** de GitHub

## 📊 Cálculos Implementados

### Beneficios Tributarios 2025
- **Alimentación**: Exenta hasta $2,041,900 (41 UVT) si salario ≤ $15,439,000 (310 UVT)
- **Medicina Prepagada**: Deducible hasta $797,600 (16 UVT) mensual
- **Seguro de Vida**: Deducible hasta $797,600 (16 UVT) mensual

### Retención en la Fuente
- **Deducción 40%**: Hasta $3,162,200 mensual (790 UVT anuales)
- **Tabla UVT 2025**: Aplicada según ingresos gravables
- **Cálculo mensualizado**: Para mayor precisión

## 🔄 Actualizaciones Automáticas

- **Datos cada minuto**: Precios y tasas actualizados
- **Fallback inteligente**: Si una API falla, usa otra automáticamente
- **Cache local**: Para mejor rendimiento

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

---

**Desarrollado con ❤️ para la comunidad colombiana de Twilio**