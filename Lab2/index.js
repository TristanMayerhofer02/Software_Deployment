const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Azure DevOps!');
});

if (require.main === module) {
    const port = process.env.PORT || 3000; // Fallback zu 3000, falls PORT nicht gesetzt
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

module.exports = app;
