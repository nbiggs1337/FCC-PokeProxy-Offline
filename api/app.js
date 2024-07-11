const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const app = express();


app.use(helmet())
app.use(cors())
app.use(express.json());


const routes = require("./routes");

app.use("/", routes)


module.exports = app;