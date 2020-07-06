var express = require ('express'); 
var router = express.Router();
const commands = require("../commands");

router.get('/', function(req, res, next) {
	res.render('index', {title: "", Message: ""});
});

router.get('/manag', function(req, res, next) {
    var file = commands.readFile("list.json");
	res.send(file);
});

module.exports = router; 

