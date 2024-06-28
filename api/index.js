const app = require("./app");

const port = 5000;

app.listen(port, () => {
    console.log(`... PokeDex live and running on ${port}`)
})