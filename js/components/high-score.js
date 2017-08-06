import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class HighScore extends React.Component {
    componentWillReceiveProps() {
        if (this.props.gameOver && this.props.gameOver === this.props.turnN)
            this.props.dispatch(actions.putHighScore(this.props.turnN));
    }

    componentDidMount() {
        this.props.dispatch(actions.getHighScore());
    }

    componentDidUpdate() {
        this.render();
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
    // I don't use `gameOver` nor `turnN`, but without them,
    // componentWillReceiveProps won't update
    highScore: state.highScore,
    gameOver: state.gameOver,
    turnN: state.turnN
});

export default connect(mapStateToProps)(HighScore);
