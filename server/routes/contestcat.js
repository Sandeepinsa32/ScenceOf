var express = require('express');
var router = express.Router();
var db = require('../db');

/* get method for fetch all contestcategory. */
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



module.exports = router;