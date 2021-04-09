var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
	extended: false,
});

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

/*post method for create user*/
router.post('/create', function (req, res, next) {
	console.log(req.body);
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;

	var sql = `INSERT INTO users (name, email, password) VALUES ("${name}", "${email}", "${password}")`;
	db.query(sql, function (err, result) {
		if (err) {
			res.status(500).send({error: 'Something failed!'});
		}
		res.json({status: 'success', id: result.insertId});
	});
});

/*post method for login user*/
router.post('/login', function (req, res, next) {
	console.log(req.body);
	var email = req.body.email;
	var password = req.body.password;

	var sql = `SELECT * FROM users WHERE email="${email}" AND password="${password}"`;
	db.query(sql, function (err, result) {
		if (err) {
			res.status(500).send({error: 'Something failed!'});
		}
		res.json({status: 'success', user: result});
	});
});

module.exports = router;
