import React from 'react';
import {connect} from 'react-redux';

export class FeedbackBar extends React.Component {
    constructor(props) {
        super(props);
        this.text = 'Make a Guess';
    }

    render() {
        return (
            <div className="feedback-bar">
              <p className="feedback">{this.props.text}</p>
            </div>
        );
    }
}

const mapStateToDisplay = (state, props) => {
    let text;

    if (!state.gameOver) {
        text = gameFeedback(Math.abs(state.difference));
    } else {
        text = postGameFeedback(state.turnN - state.gameOver);
    }
    return { text };
};

const gameFeedback = (difference) => {
    if (difference == 100) { return 'Guess a number between 1 and 100'; } else
    if (difference > 40)   { return 'Cold.'; } else
    if (difference > 30)   { return 'Like an early-spring breeze...'; } else
    if (difference > 20)   { return 'Lukewarm...'; } else
    if (difference > 15)   { return 'Warm!'; } else
    if (difference > 8)    { return 'Hot!'; } else
    if (difference > 1)    { return 'Scorching!'; } else
    if (difference > 0)    { return 'You\'re so close!'; }
};

const postGameFeedback = (turnsPastEnd) => {
    if (turnsPastEnd < 3) {
        return 'You got it!'; }

    else if (turnsPastEnd < 12) {
        const possibilities = [
            'Yup, you won', 'Game\'s still over', 'Congrats.',
            'You are the winner', 'Thanks for playing; game over',
            'Yes...you guessed the right number', 'You are the champions'
        ];
        return possibilities[Math.floor(Math.random() * possibilities.length)];

    } else {
        return 'Click "New Game" to start again';
    }
}

export default connect(mapStateToDisplay)(FeedbackBar);
