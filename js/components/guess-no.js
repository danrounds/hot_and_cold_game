import React from 'react';
import {connect} from 'react-redux';

export class GuessNo extends React.Component {
    render() {
        return (
            <div>
              <p className="guess-no">Guess #{this.props.guess_no}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, props) =>  ({
    guess_no: state.guesses.length
});

export default connect(mapStateToProps)(GuessNo);
