const express = require('express');

const router = express.Router();

// READ ALL
router.get('/', (req, res, next) => {
    res.json({
        message: 'Hello All'
    })
});

// READ ONE
router.get('/:id', (req, res, next) => {
    res.json({
        message: 'Hello One'
    })
});

module.exports = router;