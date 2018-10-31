// This is a server instance intended only to track high score.
// For now, it needs to be run in a separate node instance.

const express = require('express');
const jsonParser = require('body-parser').json();

const app = express();

app.use(jsonParser);
const options = {
    // Options for serving our static files
    dotfiles: 'ignore',
    etag: true,
    extensions: ['htm', 'html'],
    index: 'index.html',
    lastModified: true,
    maxAge: '1d',
    setHeaders: function (res) {
        res.set('x-timestamp', Date.now());
        res.header('Cache-Control', 'public, max-age=1d');
    }
};
app.use('/', express.static('./build/', options));

let highScore = null;

app.get('/fewest-guesses/', (req, res) => {
    res.json({highScore: highScore});
});

app.put('/fewest-guesses/', jsonParser, (req, res) => {
    if (highScore === null || req.body.highScore < highScore) {
        highScore = req.body.highScore;
    }
    res.status(201).json({highScore: highScore});
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
