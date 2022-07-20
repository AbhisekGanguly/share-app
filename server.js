const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

// CORs policy

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



//connect to the frontend
//currently feature suspended!

// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
