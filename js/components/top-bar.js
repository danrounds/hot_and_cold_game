import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.startNew = this.startNew.bind(this);
    }

    startNew(e) {
        this.props.dispatch(actions.startNewGame());
    }

    render() {
        return (
            <div className="top-bar">
              <a className="what-is-link" href="#">What?</a>
              <a className="new-game-link" href="#" onClick={this.startNew}>+New Game</a>
            </div>
        );
    }
}

export default connect()(TopBar);
