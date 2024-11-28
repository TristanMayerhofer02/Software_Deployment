const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, localhost!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
