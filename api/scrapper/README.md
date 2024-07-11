
# Pokémon Scraper

This is a simple Node.js application that scrapes Pokémon data from a given API and saves it to local JSON files. The application uses Express for the server, Axios for making HTTP requests, and the native `fs` module for file operations.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/nbiggs1337/FCC-PokeProxy-Offline
    cd FCC-PokeProxy-Offline/api/scrapper
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm run scrape
    ```

2. Visit `http://localhost:3000/scrape` in your web browser or use a tool like `curl` or Postman to hit the endpoint:
    ```sh
    curl http://localhost:3000/scrape
    ```

3. The server will scrape the Pokémon data from the API and save it to the local JSON files: `data/pokemon.json` and `data/directory.json`.

## Endpoints

- `GET /scrape`: Fetches Pokémon data from the external API and saves it locally.

## Project Structure

```
pokemon-scraper/
├── data/
│   ├── pokemon.json         # Contains the scraped Pokémon data
│   └── directory.json       # Contains the index of scraped Pokémon
├── app.js                   # The main application file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.

Install these dependencies using:
```sh
npm install express axios
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
