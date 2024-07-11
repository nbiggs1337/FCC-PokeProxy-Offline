
# Pokémon API

This is intended to be used with [FreeCodeCamps Pokemon Search App Project] (https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-pokemon-search-app-project/build-a-pokemon-search-app) when offline or unable to access the official PokeAPI.

This is a simple Node.js and Express application that serves Pokémon data from local JSON files.
It provides endpoints to test the server, retrieve a list of Pokémon, and fetch specific Pokémon details based on numerical or string input.


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
    https://github.com/nbiggs1337/FCC-PokeProxy-Offline
    cd FCC-PokeProxy-Offline
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Visit the various endpoints in your web browser or use a tool like `curl` or Postman to interact with the API.

## Endpoints

- `GET /test`: Returns a test message to check if the server is running.
- `GET /`: Returns the directory of all available Pokémon.
- `GET /:input`: Returns Pokémon details based on the input, which can be either a numerical ID or a Pokémon name.

### Examples

1. Test the server:
    ```sh
    curl http://localhost:5000/test
    ```

2. Get the list of all Pokémon:
    ```sh
    curl http://localhost:5000/
    ```

3. Get details of a Pokémon by ID:
    ```sh
    curl http://localhost:5000/1
    ```

4. Get details of a Pokémon by name:
    ```sh
    curl http://localhost:5000/pikachu
    ```

## Project Structure

```
pokemon-api/
├── data/
│   ├── pokemon.json         # Contains the Pokémon data
│   └── directory.json       # Contains the index of Pokémon
├── routes                   # Defines the API routes
├── app.js                   # The main application file
├── index.js                 # The server application file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.

Install the dependencies using:
```sh
npm install express
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
