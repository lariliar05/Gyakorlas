const express = require("express")
const mysql = require("mysql")

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, ()=> {
    console.log("A szerver ezen a porton fut: " + port.toString())
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})
db.connect(err => {
    if (err) {
        console.log("Sikertelen csatlakozás az adatbázishoz. Hiba: " + err.message)
    }
    else {
        console.log("Sikeres csatlakozás az adatbázishoz.")
    }
})

app.get("/", (req, res) => {
    res.send(`
    <form action="/getusers" method="get">
        <label for="name">Név:</label><br>
        <input type="text" name="name" id="name"><br><br>
        <input type="submit" value="Keresés">
    </form><br><hr><br>
    <form action="/addusers" method="post">
        <label for="name">Név:</label><br>
        <input type="text" name="name" id="name"><br><br>
        <label for="email">Email:</label><br>
        <input type="text" name="email" id="email"><br><br>
        <input type="submit" value="Új felhasználó">
    </form>`)
})

app.get("/getusers", (req, res) => {
    const uname = req.query.name
    db.query(`SELECT * FROM users WHERE name = '${uname}'`, (err, result) => {
        if (err) {
            res.json(err.message)
        }
        else if (result == "") {
            res.send("Nem található a keresett felhasználó!")
        }
        else {
            res.json(result)
        }
    })
})

app.post("/addusers", (req, res) => {
    const uname = req.body.name
    const uemail = req.body.email

    db.query(`INSERT INTO users (name, email) VALUE ("${uname}", "${uemail}")`, (err) => {
        if (err) {
            res.json(err.message)
        }
        else {
            res.send("User added successfully.")
        }
    })
})