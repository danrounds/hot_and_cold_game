import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class NumberEntry extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.getFocus = this.getFocus.bind(this);
    }

    getFocus() {
        this.inputField.focus();
    }

    handleKeyPress(e) {
        if (e.key === 'Enter')
            this.onButtonClick();
    }

    onButtonClick() {
        const guess = Math.trunc(this.inputField.value.trim());
        if (!this.props.gameOver && !this.props.guesses.includes(guess)
            && guess > 0 && guess < 101) {
            this.props.dispatch(actions.makeGuess(guess));
        } else {
            this.props.dispatch(actions.makeBadGuess(guess));
        }
        this.inputField.value = '';
        console.log(store.getState());
    }

    render() {
        return (
            <div className="number-entry-form">
              <input className="guess-entry" type="text" placeholder={ !this.props.gameOver ? 'enter your guess...' : 'you won!' }
                     ref={ element => { this.inputField = element; }}
                     onKeyPress={ this.handleKeyPress }
                     onBlur={ this.getFocus }
                     autoFocus required />
              <br />
              <button className="guess-button" type="button" onClick={ this.onButtonClick }>
                Guess!
              </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    guesses: state.guesses,
    gameOver: state.gameOver,
});

export default connect(mapStateToProps)(NumberEntry);
