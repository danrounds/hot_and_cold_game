import * as actions from '../actions/index';

const initialState = {
    guesses: [],
    actual: Math.ceil(Math.random() * 100),
    difference: 100,
    gameOver: 0,       // we're basically using gameOver as a boolean
    turnN: 0,          // (i.e. in conditionals), but its number value
    // is compared with turnN after the game is won
    highScore: null
};


export const reducer = (state=initialState, action) => {
    switch(action.type) {
    case actions.START_NEW_GAME:
        return {
            guesses: [],
            actual: Math.ceil(Math.random() * 100),
            difference: 100,
            gameOver: 0,
            turnN: 0,
            highScore: state.highScore
        };

    case actions.MAKE_GUESS:
        return {
            guesses: [...state.guesses, action.guess],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN + 1,
            highScore: state.highScore
        };

    case actions.COMPARE_TO_ACTUAL:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: action.guess - state.actual,
            gameOver: !(action.guess - state.actual) ? state.turnN : 0,
            turnN: state.turnN,
            highScore: state.highScore
        };

    case actions.INCREMENT_TURN:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN + 1,
            highScore: state.highScore
        };

    case actions.GET_HIGH_SCORE_SUCCESS:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN,
            highScore: action.highScore
        };

    case actions.PUT_HIGH_SCORE_SYNC:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN,
            highScore: action.highScore
        };

    default:
        return Object.assign({}, state);               // fallthrough
    }

};
