const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require('./routes/playersRouter')
const bodyParser = require('body-parser')

const config = require('../ludo/models/index');

const PORT = process.env.PORT || 5000

const app = express();

// app.use(cors(corOptions)); 
app.use(cors()); 
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
  res.send("GAMER");
}); 

app.use('/api/v1/users', router)

app.listen(PORT,()=>{
    console.log('server is runningon port ${PORT}');
});