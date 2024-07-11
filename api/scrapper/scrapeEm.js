const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = 3000;
const url = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

app.get('/scrape', async (req, res) => {
    try {
        // Fetch data from the URL
        const response = await axios.get(url);
        const data = response.data.results;
        let localIndex = [];
        let allPokes = await Promise.all(data.map( async item => {
            // console.log(item.url)
            //create index in localIndex
            localIndex.push({ id: item.id, name: item.name, url: `http://localhost:5000/pokemon/${item.id}`})
            // fetch that pokemon 
            let fetch = await axios.get(item.url);
            
            console.log(`.-.-.-. scrapping ${item.name} .-.-.-.-.`)

            // save to local file 
            return fetch.data;
        }))
        fs.writeFileSync("data/pokemon.json", JSON.stringify(allPokes, null, 2))
        fs.writeFileSync("data/directory.json", JSON.stringify(localIndex, null, 2))


    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running- visit http://localhost:${port}/scrape to init data`);
});