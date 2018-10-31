import * as actions from '../actions/index';

const initialState = {
    guesses: [],
    actual: Math.ceil(Math.random() * 100),
    difference: 100,
    gameOver: false,
    turnN: 0,
    nInputsSubmitted: 0,
    highScore: null,
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
            nInputsSubmitted: 0,
            highScore: state.highScore,
        };

    case actions.MAKE_GUESS:
        return {
            guesses: [...state.guesses, action.guess],
            actual: state.actual,
            difference: Math.abs(action.guess - state.actual),
            gameOver: action.guess === state.actual,
            turnN: ++state.turnN,
            nInputsSubmitted: ++state.nInputsSubmitted,
            highScore: state.highScore,
        };

    case actions.INCREMENT_N_INPUTS:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN,
            nInputsSubmitted: ++state.nInputsSubmitted,
            highScore: state.highScore,
        };

    case actions.GET_HIGH_SCORE_SUCCESS:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN,
            nInputsSubmitted: state.nInputsSubmitted,
            highScore: action.highScore,
        };

    case actions.PUT_HIGH_SCORE_SYNC:
        return {
            guesses: [...state.guesses],
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN,
            nInputsSubmitted: state.nInputsSubmitted,
            highScore: action.highScore,
        };

    default:
        return Object.assign({}, state);               // fallthrough
    }

};
