var express = require('express');
var router = express.Router();
var db = require('../db');

/* get method for fetch all contestcategory. */
//  http://localhost:3000/contestcategory
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM contestcategory";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});


/* get method for fetch all contestcategory. */
//  http://localhost:3000/contestcategory/byId
router.get('/byId', function (req, res, next) {
    var sql = `SELECT * FROM contestcategory where id=${req.query.id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/*Create contestcategory. */
//  http://localhost:3000/contestcategory/create
router.post('/create', function (req, res, next) {
    var name = req.body.name;
    var img = req.body.image;
    var sql = `INSERT INTO contestcategory(name, background) VALUES ("${name}","${image}")`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json({ 'status': 'success', res: result.insertId, "msg": "Category Created" })
    })
});


/*put method for update contestcategory*/
// http://localhost:3000/contestcategory/update
router.put('/update', function(req, res, next) {
    var id = req.body.id;
    var name = req.body.name;
    var img = req.body.image;
    var sql = `UPDATE contestcategory SET name="${name}",background="${img}"  WHERE id=${id}`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success'})
    })
  });


module.exports = router;