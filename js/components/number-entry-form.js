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

    componentWillReceiveProps() {
        console.log(`this.props.gameOver :  ${this.props.gameOver}`);
        console.log(`this.props.turnN    :  ${this.props.turnN}`);
        if (this.props.gameOver && this.props.gameOver === this.props.turnN) {
            alert();
        }
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
                    alert(`You've already guessed ${guess}`);
                } else {
                    this.props.dispatch(actions.makeGuess(guess));
                    // this.props.dispatch(actions.incrementTurn());
                    this.props.dispatch(actions.compareToActual(guess));
                }
            } else {
                alert('Enter a (natural) number between 0 and 100');
            }
        } else {
            this.props.dispatch(actions.incrementTurn());
        }

        this.inputField.value = '';
        console.log(store.getState());

        // console.log(`this.props.gameOver :  ${this.props.gameOver}`);
        // console.log(`this.props.turnN    :  ${this.props.turnN}`);

        // if (this.props.gameOver && this.props.gameOver === this.props.turnN) {
        //     alert();
        // }

    }

    render() {
        return (
            <div className="number-entry-form">
              <input className="guess-entry" type="text" placeholder="enter your guess..."
                     ref={element => { this.inputField = element; }}
                onKeyPress={this.handleKeyPress}
                onBlur={this.getFocus}
                autoFocus required />
<br />
<button className="guess-button" type="button" onClick={this.onButtonClick}>
  Guess!
</button>
</div>
        );
    }
}
// Emacs's JSX-mode indentation is screwy

// const mapStateToProps = (state, props) => ({
//     guesses: state.guesses,
//     gameOver: state.gameOver,
//     turnN: state.turnN
// });

function mapStateToProps(state) {
    console.log('OK');
    console.log(`state.turnN ${state.turnN}`);
    console.log(`state.gameOver ${state.gameOver}`);
    return {
        guesses: [...state.guesses],
        gameOver: state.gameOver,
        turnN: state.turnN
    };
}


export default connect(mapStateToProps)(NumberEntry);
