const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Vijay@95",
    database: "playerslist"
});

app.get("/get", (req, res) => {
    const sqlSelect = "SELECT * FROM playerslist.playersdatas";
    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        res.send(result);
    });
});

app.post("/create",(req, res) => {
    console.log(req.body);
    const name =  req.body.name;
    const age =  req.body.age;
    const role =  req.body.role;
    const team =  req.body.team;

    db.query(
        "INSERT INTO playersdatas (name, age, role, team) values (?,?,?,?)",
        [name, age, role, team],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Details are added");
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Server Connected in 3001");
});