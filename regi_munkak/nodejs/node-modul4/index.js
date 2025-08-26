const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

app.get("/", (req, res) => {
    res.send("Helló árvíztűrő fúrógép!")
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err.message)
    } else {
        console.log("Database connection successful")
    }
})

app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.send(err.message)
        } else {
            res.json(result)
        }
    })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    db.query(`SELECT * FROM users WHERE id = '${id}'`, (err, result) => {
        if (err) {
            res.send(err.message)
        } else if (result.length == 0) {
            res.send('User not found.')
        } else {
            res.json(result)
        }        
    })
})

app.post('/users', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    //db.query(`INSERT INTO users (name, email) VALUES (?, ?)`,[name, email], (err, result) => {
    db.query(`INSERT INTO users (name, email) VALUES ('${name}', '${email}')`, (err, result) => {
        if (err) {
            res.send(err.message) 
        } else {
            res.status(201).json({name, email})
        }
    })
})

app.put('/users/:id',(req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    db.query(`UPDATE users SET name = '${name}', email ='${email}' WHERE id = ${id}`, (err, result) => {
        if (err) {
            res.send(err.message) 
        } else {
            res.status(201).json({name, email})
        }
    })
})

app.delete('/users/:id', (req, res)=>{
    const id = req.params.id
    db.query(`DELETE FROM users WHERE id = ${id}`, (err, result)=>{
        if (err) {
            res.send(err.message)
        } else {
            res.send('User deleted successfully!')
        }
    })
})