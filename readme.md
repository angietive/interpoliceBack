# Backend Interpolis Enterprise

## Descripción
API RESTful para el sistema Interpolis Enterprise - Laboratorio fullstack para gestión de ciudadanos, usuarios, delitos y evidencias policiales.

## 🚀 Características
- Autenticación JWT
- Encriptación de contraseñas con bcrypt
- Generación de códigos QR
- Gestión de evidencias con archivos multimedia
- API RESTful completa
- Base de datos MySQL

## 📋 Prerrequisitos
- Node.js (versión LTS recomendada)
- MySQL/MariaDB
- npm o yarn

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd backInterpolis
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar el archivo .env con tus configuraciones
```

### 4. Configurar la base de datos
- Crear la base de datos MySQL usando el archivo `src/documentos/interpolice_enterprise (5).sql`
- Configurar las credenciales en el archivo `.env`

### 5. Ejecutar el servidor
```bash
# Desarrollo (con nodemon)
npm run dev

# Producción
npm start
```

## 📁 Estructura del Proyecto
```
backInterpolis/
├── src/
│   ├── config/
│   │   └── dbConexion.js       # Configuración de base de datos
│   ├── documentos/
│   │   └── interpolice_enterprise (5).sql
│   └── modulos/
│       ├── ciudadanos/         # Gestión de ciudadanos
│       ├── delitos/            # Gestión de delitos
│       ├── evidencias/         # Gestión de evidencias
│       ├── helpers/            # Utilidades (tokens, QR)
│       ├── login/              # Autenticación
│       └── usuarios/           # Gestión de usuarios
├── index.js                    # Punto de entrada de la aplicación
└── package.json
```

## 🔧 Scripts Disponibles
- `npm start` - Ejecutar en producción
- `npm run dev` - Ejecutar en desarrollo con nodemon
- `npm run build` - Build del proyecto
- `npm test` - Ejecutar tests (pendiente de implementar)

## 📡 API Endpoints

### Autenticación
- `POST /login` - Iniciar sesión

### Usuarios
- `GET /usuarios` - Listar usuarios
- `POST /usuarios` - Crear usuario
- `PUT /usuarios/:id` - Actualizar usuario
- `DELETE /usuarios/:id` - Eliminar usuario

### Ciudadanos
- `GET /ciudadanos` - Listar ciudadanos
- `POST /ciudadanos` - Registrar ciudadano
- `PUT /ciudadanos/:id` - Actualizar ciudadano
- `DELETE /ciudadanos/:id` - Eliminar ciudadano

### Delitos
- `GET /delitos` - Listar delitos
- `POST /delitos` - Registrar delito
- `PUT /delitos/:id` - Actualizar delito

### Evidencias
- `GET /evidencias` - Listar evidencias
- `POST /evidencias` - Subir evidencia
- `DELETE /evidencias/:id` - Eliminar evidencia

## 🔒 Seguridad
- Autenticación basada en JWT
- Encriptación de contraseñas con bcrypt
- CORS configurado
- Validación de tokens

## 🛡️ Variables de Entorno
Referirse al archivo `.env.example` para las variables requeridas:
- `PORT` - Puerto del servidor
- `HOST` - Host de la base de datos
- `DB_USER` - Usuario de la base de datos
- `DB_PASSWORD` - Contraseña de la base de datos
- `DB_DATABASE` - Nombre de la base de datos
- `JWT_SECRET` - Clave secreta para JWT

## 🤝 Contribución
1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia
ISC License

## 🔧 Tecnologías Utilizadas
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MySQL2** - Cliente de base de datos
- **JWT** - Autenticación
- **bcrypt** - Encriptación de contraseñas
- **multer** - Manejo de archivos
- **qrcode** - Generación de códigos QR
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Variables de entorno
    
