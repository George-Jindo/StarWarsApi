const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});