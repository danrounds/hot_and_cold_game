import * as actions from '../actions/index';

const initialState = {
    guesses: [],
    actual: Math.ceil(Math.random() * 100),
    difference: 100,
    gameOver: false,
    turnN: 0
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
    case actions.START_NEW_GAME:
        return {
            guesses: [],
            actual: Math.ceil(Math.random() * 100),
            difference: 100,
            gameOver: false,
            turnN: state.turnN
        };

    case actions.MAKE_GUESS:
        return {
            guesses: [...state.guesses, action.guess],
            actual: state.actual,
            difference: state.difference,
            gameOver: false,
            turnN: state.turnN
        };

    case actions.COMPARE_TO_ACTUAL:
        return {
            guesses: state.guesses,
            actual: state.actual,
            difference: action.guess - state.actual,
            gameOver: Boolean(!(action.guess - state.actual)),
            turnN: state.turnN
        };

    case actions.INCREMENT_TURN:
        return {
            guesses: state.guesses,
            actual: state.actual,
            difference: state.difference,
            gameOver: state.gameOver,
            turnN: state.turnN + 1
        };
    }

    return state;               // fallthrough
}
