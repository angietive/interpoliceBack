import mysql from "mysql2/promise";

// Configuración del pool de conexiones optimizada para la nube
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  reconnect: true
});

// Verificar conexión al iniciar
pool.getConnection()
  .then(connection => {
    console.log('✅ Base de datos conectada exitosamente');
    console.log(`Host: ${process.env.HOST}`);
    console.log(`Database: ${process.env.DB_DATABASE}`);
    connection.release();
  })
  .catch(err => {
    console.error('❌ Error conectando a la base de datos:', err.message);
  });

export default pool;

