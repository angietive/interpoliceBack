import express from "express"; //hecho con es6
import "dotenv/config";

// Verificar variables de entorno críticas
console.log('=== VARIABLES DE ENTORNO ===');
console.log('HOST:', process.env.HOST || 'No definida');
console.log('DB_USER:', process.env.DB_USER ? 'Definida' : 'No definida');
console.log('DB_DATABASE:', process.env.DB_DATABASE || 'No definida');
console.log('PORT:', process.env.PORT || 'No definida');
console.log('==========================');


// para probar si funciono import "./src/dbConexion.js"
import db from "./src/config/dbConexion.js";
import ciudadano from "./src/modulos/ciudadanos/ciudadano.routes.js"; //hecho con es6
import usuarios from "./src/modulos/usuarios/usuarios.routes.js"; 
import loginRoutes from "./src/modulos/login/login.routes.js";
import delitosRoutes from "./src/modulos/delitos/delito.routes.js";
import evidenciasRoutes from "./src/modulos/evidencias/evidencia.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
import cors from "cors";


const app = express();

app.use(express.json());

// Configuración CORS para producción
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // En producción, especifica la URL del frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use('/qr', express.static(path.join(__dirname, 'public/qr')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// Health check endpoint para Render
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Backend Interpolis Enterprise funcionando correctamente',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.use("/", ciudadano)
app.use("/", usuarios)
app.use("/", loginRoutes);
app.use("/delitos", delitosRoutes);
app.use("/", evidenciasRoutes);

const puerto = process.env.PORT || 4100;

app.listen(puerto, '0.0.0.0', () => {
  console.log(`=== SERVIDOR INICIADO ===`);
  console.log(`Puerto: ${puerto}`);
  console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`========================`);
});