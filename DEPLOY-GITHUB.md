# 🚀 Guía de Despliegue a GitHub Pages

## Pasos Rápidos (5 minutos)

### 1. Crear Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) y haz login
2. Clic en **"New repository"** (botón verde)
3. Nombre: `calculadora-salario-colombia`
4. Descripción: `Calculadora de salario neto Colombia con React y APIs en tiempo real`
5. Público ✅
6. **NO** marques "Add a README file"
7. Clic en **"Create repository"**

### 2. Subir Archivos
**Opción A: Via Web (Más Fácil)**
1. En tu nuevo repositorio, clic en **"uploading an existing file"**
2. Arrastra TODOS los archivos de la carpeta `c:\TRAE PROJECTS\`
3. Commit message: `Initial commit: Calculadora React`
4. Clic en **"Commit changes"**

**Opción B: Via Git**
```bash
cd "c:\TRAE PROJECTS"
git init
git add .
git commit -m "Initial commit: Calculadora React"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/calculadora-salario-colombia.git
git push -u origin main
```

### 3. Activar GitHub Pages
1. En tu repositorio, ve a **Settings** (pestaña)
2. Scroll hasta **"Pages"** (menú izquierdo)
3. En **Source**, selecciona **"GitHub Actions"**
4. ¡Listo! El deploy se ejecutará automáticamente

### 4. Acceder a tu Aplicación
- URL: `https://TU-USUARIO.github.io/calculadora-salario-colombia/`
- Tiempo de deploy: 2-3 minutos
- Actualizaciones automáticas en cada push

## ✅ Verificar que Todo Funciona

1. **Datos en tiempo real**: Verifica que aparezcan el precio TWLO y USD/COP
2. **Cálculos automáticos**: Cambia el salario base y verifica que se actualice todo
3. **Responsive**: Prueba en móvil
4. **Sin errores**: Abre DevTools (F12) y verifica que no hay errores rojos

## 🔧 Personalizar (Opcional)

### Cambiar Valores por Defecto
Edita `index.html` líneas 95-101:
```javascript
const [salarioBase, setSalarioBase] = useState(14015044);
const [mealCard, setMealCard] = useState(938000);
// ... etc
```

### Cambiar Colores
Edita `styles.css` líneas 10-11:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🆘 Solución de Problemas

**❌ "404 - Page not found"**
- Espera 5 minutos más
- Verifica que el archivo se llame exactamente `index.html`
- Revisa Settings → Pages que esté en "GitHub Actions"

**❌ "No aparecen los precios"**
- Es normal, las APIs gratuitas tienen límites
- La app usa fallbacks simulados automáticamente

**❌ "No se ve bien en móvil"**
- Verifica que subiste el archivo `styles.css`
- Limpia caché del navegador (Ctrl+F5)

## 🎉 ¡Felicitaciones!

Tu calculadora ya está en línea y disponible para todo el mundo. Comparte tu URL:
`https://TU-USUARIO.github.io/calculadora-salario-colombia/`