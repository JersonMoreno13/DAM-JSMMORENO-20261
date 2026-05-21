import { open } from "react-native-quick-sqlite";

export const db = open({
    name: "navigation_database.sqlite",
});

export const setupDatabase = () => {
    try {

        // Tabla de usuarios
        db.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                username TEXT NOT NULL UNIQUE,
                correo TEXT NOT NULL UNIQUE,
                fechaNacimiento TEXT NOT NULL,
                contrasena TEXT NOT NULL
            );
        `);

        // Tabla de productos
        db.execute(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                sku TEXT NOT NULL,
                stock INTEGER NOT NULL,
                costoCompra REAL NOT NULL,
                precioVenta REAL NOT NULL,
                descripcion TEXT,
                userId INTEGER NOT NULL,
                FOREIGN KEY (userId) REFERENCES users(id)
            );
        `);

        console.log("Base de datos inicializada correctamente");

    } catch (error) {
        console.error(
            "No se pudo inicializar la base de datos",
            error
        );
    }
};