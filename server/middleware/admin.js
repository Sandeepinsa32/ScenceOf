const jwt = require("jsonwebtoken");

var db = require('../db');

module.exports = function (req, res, next) {
  const authheader = req.headers['authorization'];

  if (typeof authheader !== 'undefined') {
    req.token = authheader.split(' ')[1];
    jwt.verify(req.token, process.env.TOKEN, (err, authData) => {
      if (err) {
        res.json({ result: err })
      }
      else {
        // console.log(authData);
        var sql = `SELECT * FROM users WHERE id=${authData.adminid}`;
        db.query(sql, function (err, result) {
          if (err) {
            res.status(500).send({ error: err })
          }
          if (result.length > 0) {
            req.userid = authData.userid
            next();
          } else {
            res.json({ 'status': 'success', 'msg': 'Admin Not Found login Again' })
          }
        })
      }
    })
  }
  else {
    res.send({ 'status': 'success', 'msg': 'token not provide' })
  }
}
