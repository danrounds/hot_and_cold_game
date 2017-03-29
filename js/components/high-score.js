import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class HighScore extends React.Component {
    componentWillReceiveProps() {
        if (this.props.gameOver && this.props.gameOver === this.props.turnN) {
            alert('pleeeeeeeeeease');
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getHighScore());
    }

    render() {
        let text = this.props.highScore ?
                `Best score: ${this.props.highScore}` : '';
        return (
            <div className="best-score">
              <p>{text}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    highScore: state.highScore,
    gameOver: state.gameOver,
    turnN: state.turnN
});


export default connect(mapStateToProps)(HighScore);
