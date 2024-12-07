import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const dbPool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
}).promise();
dbPool.getConnection((err, connection) => {
    if (err) {
      console.error('Koneksi ke database gagal:', err.message);
    } else {
      console.log('Koneksi ke database berhasil');
      connection.release(); 
    }
  });

export default dbPool;