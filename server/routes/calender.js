var express = require('express');
var router = express.Router();
var db = require('../db');

var verifyToken = require('../middleware/auth');

/* get method for fetch all contest */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM calender";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/*post method for create contest*/
// http://localhost:3000/contest/create
router.post('/create', function (req, res, next) {
    var title = req.body.title;
    var date = req.body.date;
    var time = req.body.time;
    var sql = `INSERT INTO calender(title, date, time) VALUES ("${title}", "${date}", "${time}")`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success', id: result.insertId, "msg": "Event Created" })
    })
});


module.exports = router;