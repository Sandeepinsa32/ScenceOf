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

router.get('/', function(req, res,next){
    var sql = `SELECT * FROM testimonial`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
})


/*post method for create testimonial*/
router.post('/create', function(req, res, next) {
    var name = req.body.name;
    var text = req.body.text;
    var designat = req.body.designat;
    var userimg = req.body.userimg;

    var sql = `INSERT INTO testimonial (name, text, designat, userimg) VALUES ("${name}", "${text}", "${designat}", "${userimg}")`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success', 'id' : result.insertId});
    })
  });

  /* get method for fetch byid testimonial. */
router.get('/byId', function (req, res, next) {
    var sql = `SELECT * FROM testimonial WHERE id=${req.query.id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});


  /* get method for fetch all testimonial. */
/* http://localhost:3000/testimonial/limit?limit=10&start=10 */
router.get('/limit', function (req, res, next) {

    var sql = `SELECT * FROM testimonial LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});


module.exports = router;