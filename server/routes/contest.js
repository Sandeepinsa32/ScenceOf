var express = require('express');
var router = express.Router();
var db = require('../db');

var verifyToken = require('../middleware/auth');

/* get method for fetch all contest */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM contest";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/* get method for fetch all active contest. */
router.get('/active', function (req, res, next) {
    var sql = "SELECT * FROM contest WHERE status='1'";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/* get method for fetch all active contest. */
router.get('/byId', function (req, res, next) {
    var sql = `SELECT * FROM contest WHERE id=${req.query.id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/* get method for fetch all active contest. */
/* http://localhost:3000/contest/limit?limit=10&start=10 */
router.get('/limit', function (req, res, next) {
    var sql = `SELECT * FROM contest WHERE status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/* get method for fetch all free and active contest. */
/* http://localhost:3000/contest/contestfree?limit=10&start=0 */
router.get('/contestfree', function (req, res, next) {
    var sql = `SELECT * FROM contest WHERE type='1' AND status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        // console.log(sql);
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/* get method for fetch all free and active contest. */
/* http://localhost:3000/contest/primium?limit=10&start=10 */
router.get('/premium', function (req, res, next) {
    var sql = `SELECT * FROM contest WHERE type='2' AND status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        // console.log(sql);
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

/* get method for fetch all free and active contest. */
/* http://localhost:3000/contest/sponsored?limit=10&start=10 */
router.get('/sponsored', function (req, res, next) {
    var sql = `SELECT * FROM contest WHERE type='3' AND status='1' LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        // console.log(sql);
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

// total number of contest by User
// http://localhost:3000/contest/countcontests
router.get('/countcontests', verifyToken, function (req, res, next) {
    var sql = `SELECT count(distinct contest) as totalcontests FROM imgupload WHERE user=${req.userid}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        }
        console.log(rows);
        res.json(rows)
    })
});


/*post method for create contest*/
// http://localhost:3000/contest/create
router.post('/create', function (req, res, next) {
    var name = req.body.name;
    var image = req.body.image;
    var sponser = req.body.sponser;
    var type = req.body.type;
    var category = req.body.category;
    var start = req.body.start;
    var end = req.body.end
    var description = req.body.description
    var sql = `INSERT INTO contest(name, image, sponser, type, category,  start,end,description,status) VALUES ("${name}", "${image}", "${sponser}","${type}","${category}", "${start}", "${end}", "${description}",1)`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success', id: result.insertId, "msg": "Contest Created" })
    })
});

/*put method for update product*/
router.post('/updatestatus', function (req, res, next) {
    var id = req.body.id;
    var status = req.body.status;

    var sql = `UPDATE contest SET status="${status}" WHERE id=${id}`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({ 'status': 'success', "msg": "Status Changed" })
    })
});

// total number of contest by User
// http://localhost:3000/contest/getcontestsbyuser
router.get('/getcontestsbyuser', verifyToken, function (req, res, next) {
    var sql = `SELECT DISTINCT contest FROM imgupload WHERE user=${req.userid} LEFT JOIN contest ON contest.id=imgupload.contest`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        }
        res.json(rows);
    })
});

/* get method for fetch all active contest. */
router.get('/byuser', verifyToken, function (req, res, next) {
    var sql = `SELECT contest.name as name FROM contest RIGHT JOIN imgupload ON contest.id=imgupload.contest WHERE user=${req.userid}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

module.exports = router;