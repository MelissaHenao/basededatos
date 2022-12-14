const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app =  express();
//const port= 3000;
const dotenv = require('./config')

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//route
app.use(require('./routers/routers'));

app.listen(dotenv.port, ()=>{
    console.log( `corriendo por el puerto ${dotenv.port} y en localhost`);
})