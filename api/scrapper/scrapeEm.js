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

        data.forEach(async item => {
            console.log(item.url)
            //create index in localIndex
            localIndex.push({ id: item.id, name: item.name, url: `http://localhost:3000/pokemon/${item.id}`})
            // fetch that pokemon 
            let fetch = await axios.get(item.url);
            let resp = fetch.data;

            // save to local file 
            fs.writeFile(`data/${item.id}.json`, JSON.stringify(resp, null, 2), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    res.status(500).send('Error writing file');
                } else {
                    console.log(`JSON data saved to ${item.id}.json`);
                    res.send('JSON data saved to pokemon.json');
                }
            })
        })

        fs.writeFileSync("directory.json", JSON.stringify(localIndex, null, 2))

        // // Write the JSON data to a file
        // fs.writeFile('pokemon.json', JSON.stringify(data, null, 2), (err) => {
        //     if (err) {
        //         console.error('Error writing file:', err);
        //         res.status(500).send('Error writing file');
        //     } else {
        //         console.log('JSON data saved to pokemon.json');
        //         res.send('JSON data saved to pokemon.json');
        //     }
        // });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running- visit http://localhost:${port}/scrape to init data`);
});