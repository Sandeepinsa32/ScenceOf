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

/* get method for fetch all contesttype. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM contesttype";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err })
        }
        res.json(rows)
    })
});


/* get method for fetch all active contesttype. */
router.get('/byId', function (req, res, next) {
    var sql = `SELECT * FROM contesttype WHERE id=${req.query.id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err })
        }
        res.json(rows)
    })
});

/* get method for fetch all active contesttype. */
/* http://localhost:3000/contesttype/limit?limit=10&start=10 */
router.get('/limit', function (req, res, next) {
    var sql = `SELECT * FROM contesttype LIMIT ${req.query.limit} , ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err })
        }
        res.json(rows)
    })
});


module.exports = router;