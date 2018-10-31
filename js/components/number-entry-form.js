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
        if (!this.props.gameOver) {
            if (guess > 0 && guess < 101) {
                if (this.props.guesses.indexOf(guess) + 1) {
                    this.props.dispatch(actions.incrementNInputs());
                    alert(`You've already guessed ${guess}`);
                } else {
                    this.props.dispatch(actions.makeGuess(guess));
                }
            } else {
                alert('Enter a (natural) number between 0 and 100');
            }
        } else {
            this.props.dispatch(actions.incrementNInputs());
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
