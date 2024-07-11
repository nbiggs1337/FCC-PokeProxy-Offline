const express = require("express");
const routes = express.Router();
const directory = require("../data/directory.json")
const pokemon = require("../data/pokemon.json")


// init test route
routes.get('/test', (req, res) => {
    res.json({
        message: '👋🌎🌍🌏',
    });
});

routes.get('/', (req, res) => {
    res.json(directory);
  });



routes.get('/:input', (req, res) => {
    const numberRegex = /^[+-]?\d+(\.\d+)?$/;
    const stringRegex = /^(\d+(\.\d+)?|[a-zA-Z\-']+)$/;
    const input = req.params.input;

    if (numberRegex.test(input)) {
        // return 'Number';
        res.json(pokemon[parseInt(input) - 1 ]);
    } else if (stringRegex.test(input)) {
        // return 'String';
        // if user input is a string 
        // filter down pokemon to find matching name
        let match = pokemon.filter(poke => poke.name === input.toLowerCase())
        if(!match[0]) {res.json("Invalid Input")}
        else {
            console.log("Match found - " + match[0].name + "ID: " + match[0].id)
            // res with that id  to index -1
            res.json(pokemon[match[0].id - 1])
        }
    } else {
        res.json('Invalid');
    }

    
  });


module.exports = routes