// Actions for Hot & Cold
// * Display view
// * Display WhatIs
// * Start New Game (restart)
// * Generate Random Number
// * Make Guess
// * Update Guessed Number
// * Update List of Guessed

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
