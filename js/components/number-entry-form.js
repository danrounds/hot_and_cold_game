import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

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
        if (guess > 0 && guess < 101) {
            this.props.dispatch(actions.makeGuess(guess));
            this.props.dispatch(actions.compareToActual(guess));
            this.inputField.value = '';
        } else {
            alert('Enter a (natural) number between 0 and 100');
        }
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

export default connect()(NumberEntry);
