const path = require('path');

const express = require('express');

const routeDir = require('../util/path')

const router = express.Router();

router.get('/successpage', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'successpage.html'));
});


router.post('/successpage', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success/successpage');
});

module.exports = router;
