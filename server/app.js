require('dotenv').config();
const express = require('express');
const app = express();
require('./db/connect.js');
const route = require('./routes/router.js');
const cors = require('cors');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(port,()=>{
    console.log("server is running now");
});