import * as actions from '../actions/index';

const initialState = {
    guesses: [],
    actual: Math.ceil(Math.random() * 100),
    difference: 100
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
    case actions.START_NEW_GAME:
        return {
            guesses: [],
            actual: Math.ceil(Math.random() * 100),
            difference: 100
        };

    case actions.MAKE_GUESS:
        return {
            guesses: [...state.guesses, action.guess],
            actual: state.actual,
            difference: state.difference
        };

    case actions.COMPARE_TO_ACTUAL:
        return {
            guesses: state.guesses,
            actual: state.actual,
            difference: action.guess - state.actual
        };
    }

    return state;               // fallthrough
}
