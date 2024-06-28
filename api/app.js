const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const app = express();


app.use(helmet())
app.use(cors())
app.use(express.json());


require("./routes");

app.get("/", (req, res) => {
    res.send("WE are live")
});


module.exports = app;