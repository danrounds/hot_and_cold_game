// Actions for Hot & Cold
// * Start New Game (restart)
// * Make Guess
// * Compare guess to actual (random) value
// * Increment turn number
import 'isomorphic-fetch';

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
    type: START_NEW_GAME
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const COMPARE_TO_ACTUAL = 'COMPARE_TO_ACTUAL';
export const compareToActual = (guess) => ({
    type: COMPARE_TO_ACTUAL,
    guess
});

export const INCREMENT_TURN = 'INCREMENT_TURN';
export const incrementTurn = () => ({
    type: INCREMENT_TURN
});

export const GET_HIGH_SCORE_SUCCESS = 'GET_HIGH_SCORE_SUCCESS';
export const getHighScoreSuccess = (highScore) => ({
    type: GET_HIGH_SCORE_SUCCESS,
    highScore
});

export const PUT_HIGH_SCORE_SYNC = 'PUT_HIGH_SCORE_SYNC';
export const putHighScoreSync = (highScore) => ({
    type: PUT_HIGH_SCORE_SYNC,
    highScore
});

export const getHighScore = score => dispatch => {
    const url = 'http://localhost:8081/fewest-guesses';
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
        .then(response => response.json())
        .then(data => {
            dispatch(getHighScoreSuccess(data.highScore));
        })
        .catch(error =>
               console.log(error)
              );
};

export const putHighScore = score => dispatch => {
    const url = 'http://localhost:8081/fewest-guesses';
    console.log(score);
    const params = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({highScore: score})
    };

    console.log(params.body);

    return fetch(url, params).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
        .then(response => response.json())
        .then(data => {
            dispatch(putHighScoreSync(data.highScore));
        })
        .catch(error =>
               console.log(error)
              );
};
