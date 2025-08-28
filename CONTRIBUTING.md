# Contributing to Backend Interpolis Enterprise

## Guía de Contribución

### 1. Preparación del Entorno
- Asegúrate de tener Node.js LTS instalado
- Clona el repositorio y ejecuta `npm install`
- Copia `.env.example` a `.env` y configura las variables

### 2. Estilo de Código
- Utiliza ES6+ syntax
- Sigue la estructura modular existente (routes → controllers → models)
- Usa nombres descriptivos en español para variables y funciones
- Mantén la consistencia en los nombres de archivos

### 3. Estructura de Commits
- Usa mensajes descriptivos en español
- Formato: `tipo(módulo): descripción`
- Ejemplos:
  - `feat(usuarios): agregar endpoint para cambiar contraseña`
  - `fix(delitos): corregir validación de datos`
  - `docs(readme): actualizar documentación de API`

### 4. Pull Requests
- Crea una rama desde master: `git checkout -b feature/nueva-funcionalidad`
- Asegúrate de que el código compile sin errores
- Incluye pruebas si es posible
- Actualiza la documentación si es necesario

### 5. Reportar Issues
- Usa la plantilla de issues
- Incluye pasos para reproducir el problema
- Especifica la versión de Node.js y sistema operativo

## Desarrollo

### Comandos Útiles
```bash
# Desarrollo
npm run dev

# Producción  
npm start

# Verificar sintaxis
node --check index.js
```

### Testing
Actualmente el proyecto no tiene tests implementados. Se agradecen contribuciones para agregar:
- Tests unitarios con Jest o Mocha
- Tests de integración para las rutas API
- Tests de base de datos

## Seguridad
- Nunca commits archivos `.env` con credenciales reales
- Usa JWT tokens seguros en producción
- Valida todas las entradas de usuario
- Implementa rate limiting para endpoints públicos