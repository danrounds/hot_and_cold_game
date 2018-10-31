import React from 'react';
import { connect } from 'react-redux';

export class FeedbackBar extends React.Component {
    constructor(props) {
        super(props);
        this.gameFeedback = this.gameFeedback.bind(this);
        this.postGameFeedback = this.postGameFeedback.bind(this);
        this.state = { text: 'Make a Guess' };
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.gameOver) {
            this.gameFeedback(Math.abs(nextProps.difference));
        } else {
            this.postGameFeedback(nextProps.turnN - nextProps.gameOver);
        }
    }

    gameFeedback(difference) {
        let text;
        if (difference == 100) { text = 'Guess a number between 1 and 100'; }
        else if (difference > 40)   { text = 'Cold.'; }
        else if (difference > 30)   { text =  'Like an early-spring breeze...'; }
        else if (difference > 20)   { text = 'Lukewarm...'; }
        else if (difference > 15)   { text = 'Warm!'; }
        else if (difference > 8)    { text = 'Hot!'; }
        else if (difference > 1)    { text = 'Scorching!'; }
        else if (difference > 0)    { text = 'You\'re so close!'; }
        this.setState({ text });
    }

    postGameFeedback(turnsPastEnd) {
        let text;
        if (turnsPastEnd < 2) {
            text = 'You got it!'
        } else if (turnsPastEnd < 12) {
            const possibilities =['Yup, you won', 'Game\'s still over','Congrats.','You are the winner',
                                  'Thanks for playing; game over','Yes...you guessed the right number',
                                  'You are the champions'];
            text = possibilities[Math.floor(Math.random() * possibilities.length)];
        } else {
            text = 'Click "New Game" to start again';
        }
        this.setState({ text });
    }

    render() {
        return (
            <div className="feedback-bar">
              <p className="feedback">{ this.state.text }</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    difference: state.difference,
    guesses: state.turnN,
    gameOver: state.gameOver,
});


export default connect(mapStateToProps)(FeedbackBar);
