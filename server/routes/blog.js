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


/*post method for create blog*/
router.post('/create', function (req, res, next) {
  var title = req.body.title;
  var shortdesc = req.body.shortdescription;
  var content = req.body.content;
  var thumbnail = req.body.thumbnail;

  var sql = `INSERT INTO blog (title, shortdescription, content, thumbnail, posttime) VALUES ("${title}", "${shortdesc}", "${content}","${thumbnail}", now())`;
  db.query(sql, function (err, result) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({ 'status': 'success', id: result.insertId });
  })
});

/* get method for fetch byid blog. */
router.get('/byId', function (req, res, next) {
  var sql = `SELECT * FROM blog WHERE id=${req.query.id}`;
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(500).send({ error: err });
      console.log(err);
    }
    res.json(rows)
  })
});


/* get method for fetch all blog. */
/* http://localhost:3000/blog/limit?limit=10&start=10 */
router.get('/limit', function (req, res, next) {

  var sql = `SELECT * FROM blog LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
  db.query(sql, function (err, rows, fields) {
    if (err) {
      res.status(500).send({ error: err });
      console.log(err);
    }
    res.json(rows)
  })
});


module.exports = router;