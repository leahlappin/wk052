const express = require("express");
const app = express();
const path = require("path");

app.use(Express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");

const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];

app.get("/", (req, res) => {
// loads os code in here
let username = "Leah";
    res.render("landing", {data : username, stock : inventory});

});

app.get("/playlist", (err)=>{

res.send("my playlist");

});

app.get("/playlist/:playId", (req, res) =>{
    
let id = req.params.playId;
res.send(`SELECT * FROM playlists where ID = ${id}`);

});

app.get("/products", (req, res) => {
    let queryp = req.query.q;
    res.send(`SELECT * FROM products WHERE name LIKE (${queryp})`);
});

app.get("/products", (req, res)=>{
    let queryp = req.query.id;
    res.send(`product id: ${queryp}`);
});

app.listen(3000,(err)=>{
    if (err) throw err;
    console.log(`listening port 3000`);
});