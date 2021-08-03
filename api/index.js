const express = require('express');

const character = require('./character');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API YAYYYY'
    });
});

router.use('/character', character);


module.exports = router;