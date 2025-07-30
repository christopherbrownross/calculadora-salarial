# Instrucciones para Ejecutar con Servidor Node.js

## Opción 1: Usar la aplicación directamente (RECOMENDADO)
La aplicación ya está funcionando! Solo abre el archivo `index.html` en tu navegador.

## Opción 2: Instalar Node.js para funcionalidades avanzadas

### Paso 1: Instalar Node.js
1. Ve a https://nodejs.org/
2. Descarga la versión LTS (recomendada)
3. Instala siguiendo las instrucciones del instalador
4. Reinicia tu terminal/PowerShell

### Paso 2: Verificar instalación
```bash
node --version
npm --version
```

### Paso 3: Instalar dependencias
```bash
cd "C:\TRAE PROJECTS"
npm install
```

### Paso 4: Ejecutar servidor
```bash
npm start
```

### Paso 5: Abrir en navegador
Ve a: http://localhost:3000

## Ventajas del servidor Node.js:
- Mejor manejo de APIs externas
- Sin problemas de CORS
- Funcionalidades adicionales
- Mejor rendimiento

## La aplicación funciona sin servidor porque:
- Todo el cálculo se hace en JavaScript del cliente
- Las APIs externas son opcionales (tiene fallbacks)
- Los datos se simulan de forma realista
- No requiere base de datos

¡Disfruta tu calculadora de salario neto! 🚀