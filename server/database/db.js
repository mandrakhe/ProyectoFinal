import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/mernlogin");
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error);
    }
}
/* const mysql = require('mysql');

export const connectDB = async () => {

    const config = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tienda'
    };

    const connection = mysql.createConnection(config);

    connection.connect(function (err) {
        if (err) throw err;
        console.log('Conectado a la base de datos MySQL');

        connection.query('SELECT * FROM users', function (err, results) {
            if (err) throw err;
            console.log(results);
        });

        // Cerrar la conexión
        connection.end();
    });

} */