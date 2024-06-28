const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = 3000;
const url = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1018/';

app.get('/scrape', async (req, res) => {
    try {
        // Fetch data from the URL
        const response = await axios.get(url);
        const data = response.data;

        // Write the JSON data to a file
        fs.writeFile('pokemon.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Error writing file');
            } else {
                console.log('JSON data saved to pokemon.json');
                res.send('JSON data saved to pokemon.json');
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/scrape`);
});