var express = require('express');
var router = express.Router();
var query = require('../utils/query');

/* GET users listing. */
router.get('/api/gettrain', function(req, res, next) {
    console.log(req.query.date);
    query('select * from threeweek where date=?', [req.query.date], function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err })
        }
        res.json({ code: 1, data: result });
    })
});

module.exports = router;