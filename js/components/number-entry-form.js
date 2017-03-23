import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class NumberEntry extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter')
            this.onButtonClick();
    }

    onButtonClick() {
        const guess = Math.trunc(this.inputVal.value.trim());
        if (guess > 0 && guess < 101) {
            this.props.dispatch(actions.makeGuess(guess));
            this.props.dispatch(actions.compareToActual(guess));
            console.log(store.getState());
        } else {
            alert('Enter a (natural) number between 0 and 100');
        }
    }

    render() {
        return (
            <div className="number-entry-form">
              <input className="guess-entry" type="text" placeholder="enter your guess..."
                     ref={element => {
                         this.inputVal = element;
                }} onKeyPress={this.handleKeyPress} autoFocus required />
<br />
<button className="guess-button" type="button" onClick={this.onButtonClick}>
  Guess!
</button>
</div>
        );
    }
}

export default connect()(NumberEntry);
