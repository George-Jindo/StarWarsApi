const express = require('express');
const swapi = require('swapi-node');

const router = express.Router();

// READ ALL
router.get('/all', (req, res, next) => {
    res.json({
        message: 'Hello All',
    });
    swapi
        .get('https://swapi.dev/api/people/')
        .then((result) => {
            console.log(result);
            return result.nextPage();
        })
        .then((result) => {
            console.log(result);
            return result.previousPage();
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// READ ONE
router.get('/:id', (req, res, next) => {
    res.json({
        message: 'Hello One',
    });
    swapi.getPerson(1).then((result) => {
        console.log(result);
    });
});

module.exports = router;
