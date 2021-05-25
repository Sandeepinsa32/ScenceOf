var express = require('express');
var router = express.Router();
var db = require('../db');

var verifyToken = require('../middleware/auth')

var jwt = require('jsonwebtoken');

const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "*******",
    pass: "******"
  }
});


// http://localhost:3000/uploadimg/countimgs
router.get('/countimgs', verifyToken, function (req, res, next) {
  // console.log(req.userid); // from
  var sql = `SELECT count(*) as totalimgs FROM imgupload WHERE user=${req.userid}`;
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(500).send({ error: err });
      // console.log(err);
    }
    console.log(rows);
    res.json(rows)
  })
});

/* GET users listing. */
router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    res.json({ 'status': 'success', 'msg': err })
  })
  res.json({ 'status': 'success', 'msg': 'Loggout' });
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
      const accessToken = jwt.sign({ userid: result[0].id }, process.env.TOKEN, { expiresIn: process.env.TOKEN_EXP });
      res.json({ 'msg': 'Login Success', username: result[0].username, usertype: result[0].type, token: accessToken })
    } else {
      res.json({ 'status': 'success', 'msg': 'Incorrect Username and/or Password!' })
    }
  })
});

router.post('/forgetpass', function (req, res, next) {
  var email = req.body.email;
  var sql = `SELECT * FROM users WHERE email="${email}"`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: err })
    }
    if (result.length > 0) {

      let otp = Math.random().toString(36).substring(4);

      db.query(`UPDATE users SET otp="${otp}" where email="${email}"`, function (err, result) {
        if (err) {
          res.status(500).send({ 'msg': 'Something failed!' })
        }
        const message = {
          from: ' ScenesOfNewEngland <10funfun01@gmail.com>', // Sender address
          to: email,         // List of recipients
          subject: 'Forget password', // Subject line
          html: `<h2> Your OTP is <b style='color:blue'> ${otp} </b></h2>` // Plain text body
        };
        transport.sendMail(message, function (err, info) {
          if (err) {
            console.log(err);
            res.json({ 'msg': 'Something went wrong Email not Send' })
          } else {
            console.log(info);
            res.json({ 'msg': 'Email Send' })
          }
        });
      })
    } else {
      res.json({ 'status': 'success', 'msg': 'Email No found' })
    }
  })
});



router.post('/newpassword', function (req, res, next) {
  var email = req.body.email;
  var otp = req.body.otp;
  var newpass = req.body.newpass;
  if (otp !== undefined || otp !== '') {
    var sql = `SELECT * FROM users WHERE email="${email}" AND otp="${otp}"`;
    db.query(sql, function (err, result) {
      if (err) {
        res.status(500).send({ error: err })
      }
      if (result.length > 0) {

        db.query(`UPDATE users SET otp="NULL", password="${newpass}" where email="${email}"`, function (err, result) {
          if (err) {
            res.status(500).send({ 'msg': 'Something failed!' })
          }
          res.json({ 'msg': 'Password Updated' })
        })
      } else {
        res.json({ 'status': 'success', 'msg': 'Email or OTP Not Match' })
      }
    })
  }
})



module.exports = router;