const express = require("express");
const path = require("path")
const hbs = require("hbs");
const collection = require("./mongodb.js");
const app = express()

const templatePath = path.join(__dirname, '../temp')

app.use(express.json())
app.set("view engine", hbs)
app.set("views", templatePath)

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})


app.post("/singup", async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])

    res.render("home")
})






app.listen(4000, () => {
    console.log(`⚙️  Server is running at port 4000`);
})