require('dotenv').config();

const mongoose = require('mongoose');
function connectDB() {
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', () => console.log('Connected to Database'));
    mongoose.connection.on('error', (err) => console.log('Connection failed with - ',err));
}


module.exports = connectDB;