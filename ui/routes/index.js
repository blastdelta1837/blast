const express = require('express'),
router = express.Router(),
util = require('util'),
path = require('path');

router.use(function(req, res, next) {
    res.set('X-XSS-Protection', 0);
    next();
});

router.get('/',function(req, res, next) {
    res.render('index', {
        title: "Blast"
    });
    res.end();
});




module.exports = router;
