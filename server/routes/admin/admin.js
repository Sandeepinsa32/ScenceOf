var express = require('express');
var router = express.Router();
var db = require('../../db');

var verifyToken = require('../../middleware/admin');
var jwt = require('jsonwebtoken');

/* logout users listing. */
router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    res.json({ 'status': 'success', 'msg': err })
  })
  res.json({ 'status': 'success', 'msg': 'Loggout' });
});

/*post method for login user*/
router.post('/login', function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var sql = `SELECT * FROM admin WHERE email="${email}" AND password="${password}"`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    if (result.length > 0) {
      const accessToken = jwt.sign({ adminid: result[0].id }, process.env.TOKEN, { expiresIn: process.env.TOKEN_EXP });
      res.json({ 'status': 'success', 'admin': result[0].name, 'msg': 'Login Success', token: accessToken })
    } else {
      res.json({ 'status': 'success', 'msg': 'Incorrect name and/or Password!' })
    }
  })
});

// --------------------------------------------
// contest
// --------------------------------------------

// http://localhost:3000/admin/contesttable
router.get('/contesttable', function (req, res, next) {
  var sql = `SELECT contest.name,contest.sponser,contest.image,contesttype.type,contestcategory.name as catname from contest LEFT JOIN contesttype ON contesttype.id=contest.type LEFT JOIN contestcategory on contestcategory.id=contest.category`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    res.json(result);
  })
});

router.get('/contestdel', function (req, res, next) {

  var id = req.query.id;
  var sql = `DELETE FROM contest WHERE id=${id}`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    res.json(result);
  })
});


// create
// http://localhost:3000/admin/createcontestcategory
router.post('/createcontestcategory', function (req, res, next) {
  var catname = req.body.categoryname;
  var background = req.body.background;

  var sql = `INSERT INTO  contestcategory (name, 	background) VALUES ("${catname}", "${background}")`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    res.json({ status: 'Success', result: result, 'msg': 'Category Created' });
  })
})

// ----------------------------------------------
// ImageList
// -----------------------------------------------

// http://localhost:3000/admin/imageslist
router.get('/imageslist', function (req, res, next) {
  var sql = `SELECT imgupload.url as images, users.email as useremail, users.username as username FROM imgupload WHERE contest=${req.query.contesid} LEFT JOIN users on users.id=imgupload.user`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    res.json(result);
  })
});

// ----------------------------------------------
// User
// -----------------------------------------------

// http://localhost:3000/admin/imageslist
router.get('/userlist', function (req, res, next) {
  var sql = `SELECT fname,lastname,username,email FROM users`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    res.json(result);
  })
})

module.exports = router;