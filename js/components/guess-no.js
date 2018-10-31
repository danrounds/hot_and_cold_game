import React from 'react';
import { connect } from 'react-redux';

export class GuessNo extends React.Component {
    render() {
        return (
            <div>
              <p className="guess-no">Guess #{ this.props.guessNo }</p>
            </div>
        );
    }
}

const mapStateToProps = (state) =>  ({
    guessNo: state.guesses.length
});

export default connect(mapStateToProps)(GuessNo);
