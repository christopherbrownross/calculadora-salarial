# 🚀 Instrucciones para Desplegar en GitHub Pages

## Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón verde "New" para crear un nuevo repositorio
3. Nombra tu repositorio (ej: `calculadora-salario-colombia`)
4. Marca la opción "Public" para que sea accesible
5. NO marques "Add a README file" (ya tenemos uno)
6. Haz clic en "Create repository"

## Paso 2: Subir el Código

### Opción A: Usando Git (Recomendado)

```bash
# Navega a la carpeta del proyecto
cd "c:\TRAE PROJECTS"

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "Initial commit: Calculadora de Salario Colombia"

# Conecta con tu repositorio (reemplaza TU-USUARIO y TU-REPOSITORIO)
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Sube el código
git branch -M main
git push -u origin main
```

### Opción B: Subir Archivos Manualmente

1. En tu repositorio de GitHub, haz clic en "uploading an existing file"
2. Arrastra todos los archivos de la carpeta `c:\TRAE PROJECTS`
3. Escribe un mensaje de commit: "Initial commit: Calculadora de Salario Colombia"
4. Haz clic en "Commit changes"

## Paso 3: Configurar GitHub Pages

1. En tu repositorio, ve a la pestaña "Settings"
2. Desplázate hacia abajo hasta la sección "Pages"
3. En "Source", selecciona "Deploy from a branch"
4. En "Branch", selecciona "main"
5. En "Folder", deja seleccionado "/ (root)"
6. Haz clic en "Save"

## Paso 4: Acceder a tu Aplicación

1. GitHub procesará el despliegue (puede tomar 1-5 minutos)
2. Tu aplicación estará disponible en:
   ```
   https://TU-USUARIO.github.io/TU-REPOSITORIO/
   ```
3. Ejemplo: `https://juanperez.github.io/calculadora-salario-colombia/`

## 🔄 Actualizaciones Automáticas

El archivo `.github/workflows/deploy.yml` ya está configurado para:
- Desplegar automáticamente cada vez que hagas push a la rama `main`
- Mantener tu aplicación siempre actualizada

## 📝 Notas Importantes

- **Tiempo de despliegue**: 1-5 minutos después del push
- **URL gratuita**: Tu aplicación tendrá una URL pública gratuita
- **HTTPS automático**: GitHub Pages incluye certificado SSL
- **Actualizaciones**: Cada cambio se despliega automáticamente

## 🛠️ Comandos Útiles para Futuras Actualizaciones

```bash
# Para actualizar tu aplicación después de hacer cambios:
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

## 🎉 ¡Listo!

Una vez completados estos pasos, tu calculadora de salario estará disponible públicamente en internet con una URL gratuita de GitHub Pages.

### Ejemplo de URL Final:
`https://tu-usuario.github.io/calculadora-salario-colombia/`

---

**💡 Tip**: Guarda la URL de tu aplicación para compartirla fácilmente con otros.