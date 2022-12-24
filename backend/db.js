const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://nawaz:nawazhassan123@cluster0.ojpnw.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;