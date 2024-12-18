const mongoose = require("mongoose");

function connectDatabase(){
    mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log("Database is connected successfully!");
    })
    .catch((err) => {
        console.log("Error while connecting database!\n" + err.message);
    })
}

module.exports = connectDatabase;