const express = require('express');
const jsonParser = require('body-parser').json();

const app = express();
const router = express.Router();

app.use(jsonParser);

let highScore = 'N/A';

app.get('/fewest-guesses/', (req, res) => {
    res.json(highScore);
});

app.put('/fewest-guesses/', jsonParser, (req, res) => {
    if (highScore === 'N/A' || req.body.highScore < highScore) {
        highScore = req.body.highScore;
    }
    res.status(201).json({highScore: highScore});
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
