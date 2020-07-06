var express = require('express');
var routes = require('./routes/main');
var app = express();
const yargs = require("yargs");
app.set('view engine', 'pug');
const commands = require("./commands");

app.locals.file = commands.readFile("list.json")

let command = yargs.argv._[0];
let item = yargs.argv.item;
let price = yargs.argv.price;

app.use('/', routes);

switch (command) {
    case "add":
        console.log("adding element")
        commands.add(item, price)
        break;
    case "remove":
        console.log("removing element")
        commands.remove(item)
        break;
}

const port = 8080;
app.listen(port, () => {
        console.log(`A node is listening on port ${port}`);
});


