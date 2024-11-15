const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(() => {
        console.log("Failed to connect Db")
    })


const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
})


const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection
