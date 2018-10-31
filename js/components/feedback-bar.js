import React from 'react';
import { connect } from 'react-redux';

export class FeedbackBar extends React.Component {
    constructor(props) {
        super(props);
        this.gameFeedback = this.gameFeedback.bind(this);
        this.postGameFeedback = this.postGameFeedback.bind(this);
        this.state = { text: 'Guess a number between 1 and 100', inputsPastEnd: -1 };
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.gameOver) {
            const guess = nextProps.guess;
            if (!/[0-9]+/i.test(guess) || guess < 1 || guess > 100)
                this.setState({ text: `Guess an integer between 1 and 100`});
            else if (this.props.guesses.includes(guess))
                this.setState({ text: `You've already guessed ${guess}`})
            else
                this.gameFeedback(Math.abs(nextProps.difference));
        } else {
            this.setState({ inputsPastEnd: ++this.state.inputsPastEnd });
            this.postGameFeedback();
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

    postGameFeedback(turns=this.state.inputsPastEnd) {
        let text;
        if (turns < 2) {
            text = 'You got it!'
        } else if (turns < 12) {
            const possibilities =['Yup, you won', 'Game\'s still over','Congrats.','You are the winner',
                                  'Thanks for playing; game over','Yes...you guessed the right number',
                                  'You are the champions'];
            text = possibilities[Math.floor(Math.random() * possibilities.length)];
        } else {
            text = 'Click "New Game" or press your \'n\' key to start again';
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
    guess: state.currentGuess,
    guesses: state.guesses,
    nInputs: state.nInputsSubmitted,
    gameOver: state.gameOver,
});


export default connect(mapStateToProps)(FeedbackBar);
