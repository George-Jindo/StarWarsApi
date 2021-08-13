const express = require('express');

//const character = require('./character');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API YAYYYY',
    });
});

router.get('/character', (req, res) => {
    res.json({
        message: 'Characters will load here',
    });
});

module.exports = router;
