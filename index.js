
import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classicmodels',
});

app.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1');
        res.json({
            message: 'Connected to MySQL successfully!',
            result: rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/question1', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT COUNT(*) AS totalCustomers
            FROM customers
            WHERE country = 'France'
        `);

        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/question1', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT COUNT(*) AS totalCustomers
            FROM customers
            WHERE country = 'France'
        `);

        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/question2', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT firstName, lastName
            FROM employees
            WHERE reportsTo = 1143
        `);

        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/question3', async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT SUM(quantityInStock) AS totalStock
            FROM products
            WHERE productLine = 'Classic Cars'
        `);

        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
