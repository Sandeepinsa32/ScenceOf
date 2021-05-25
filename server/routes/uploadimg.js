var express = require('express');
var router = express.Router();
var db = require('../db');

var verifyToken = require('../middleware/auth')

/* get method for fetch By ID . */
router.get('/byId', function (req, res, next) {
    var sql = `SELECT * FROM imgupload WHERE id=${req.query.id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        console.log(rows);
        res.json(rows)
    })
});

/* get method for fetch by Contest Id . */
// http://localhost:3000/uploadimg/byContest?contestId=X
router.get('/byContest', function (req, res, next) {
    var sql = `SELECT * FROM imgupload WHERE contest=${req.query.contesid}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            // console.log(err);
        }
        console.log(rows);
        res.json(rows)
    })
});

/* get method for fetch by User ID. */
// http://localhost:3000/uploadimg/byUser
router.get('/byUser', verifyToken, function (req, res, next) {
    var sql = `SELECT * FROM imgupload WHERE user=${req.userid}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
        }
        res.json(rows)
    })
});

// total number of images upload by User
// http://localhost:3000/uploadimg/countimgs
router.get('/countimgs', verifyToken, function (req, res, next) {
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

/*post method for insert*/
router.post('/insert', verifyToken, function (req, res, next) {
    var imgurl = req.body.imgurl;
    var contest = req.body.contesdtid;
    var sql = `INSERT INTO imgupload (url, contest, user) VALUES ("${imgurl}", "${contest}", "${req.userid}")`;
    db.query(sql, function (err, result) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err)
        }
        res.json({ status: 'success', msg: 'Image Uploaded' })
    })

});

/* http://localhost:3000/uploadimg/limit?limit=10&start=0 */
router.get('/limit', function (req, res, next) {
    var sql = `SELECT * FROM imgupload LIMIT ${req.query.limit} OFFSET ${req.query.start}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({ error: err });
            console.log(err);
        }
        res.json(rows)
    })
});

// deside winner

/*put method for update product*/
router.post('/setwinner', function(req, res, next) {
    var id = req.params.id;
    var winner = req.body.winner;
  
    var sql = `UPDATE imgupload SET winner="${winner}" WHERE id=${id}`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' });
      }
      res.json({status: 'success', msg: "status changed"})
    })
  });

  /*put method for update product*/
router.post('/getwinner', function(req, res, next) {
      
    var sql = `SELECT contest.name as contestname, imgupload.url as url, users.username FROM contest LEFT JOIN imgupload ON contest.id=imgupload.contest  JOIN users ON users.id=imgupload.user WHERE imgupload.winner=1`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' });
      }
      res.json({status: 'success', msg: "status changed"})
    })
  });


module.exports = router;