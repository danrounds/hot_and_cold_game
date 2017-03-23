import React from 'react';
import {connect} from 'react-redux';

export class GuessListDisplay extends React.Component {
    render() {
        return (
            <ul className="guess-list-box">{this.props.guesses}</ul>
        );
    }
}

const mapStateToProps = (state, props) => {
    const wrongItem = 'guess-item';
    const rightItem = 'guess-item correct-item';
    const guesses = [];
    let className = "guess-item";
    for (let i in state.guesses) {
        guesses.push(
            <li key={state.guesses[i].toString()}
                className={state.guesses[i] == state.actual ? rightItem : wrongItem }>
              {state.guesses[i]}
            </li>
        );
    }
    return {
        guesses
    };
};

export default connect(mapStateToProps)(GuessListDisplay);
