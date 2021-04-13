var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');


router.use(bodyParser.json());
// Create application/x-www-form-urlencoded parser  
router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(express.json());
router.use(express.urlencoded({
  extended: true
}))

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/*post method for create user*/
router.post('/create', function (req, res, next) {
  // console.log(req.body);
  var fname = req.body.fname;
  var lastname = req.body.lastname;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  db.query(`SELECT * FROM users WHERE email="${email}"`, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    if (result.length > 0) {
      res.json({ 'status': 'success', 'msg': 'Email Already Exist' })
    }
    else {
      var sql = `INSERT INTO users (fname, lastname, username, email, password) VALUES ("${fname}", "${lastname}", "${username}","${email}", "${password}")`;
      db.query(sql, function (err, result) {
        if (err) {
          res.status(500).send({ error: err })
        }
        res.json({ 'status': 'success', id: result.insertId })
      })
    }
  })


});

/*post method for login user*/
router.post('/login', function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  var sql = `SELECT * FROM users WHERE email="${email}" AND password="${password}"`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    if (result.length > 0) {
      req.session.loggedin = true;
      req.session.username = email;
      // console.log(req.session.username);
      res.json({ 'status': 'success', 'user': email, 'msg': 'Login Success' })
    } else {
      res.json({ 'status': 'success', 'msg': 'Incorrect Username and/or Password!' })
    }
  })
});

module.exports = router;
