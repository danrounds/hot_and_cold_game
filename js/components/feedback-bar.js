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
    const difference = Math.abs(state.difference);
    let text;

    if (difference == 100) { text = 'Guess a number between 1 and 100'; } else
    if (difference > 40)   { text = 'Cold.'; } else
    if (difference > 30)   { text = 'Like an early-spring breeze...'; } else
    if (difference > 20)   { text = 'Lukewarm...'; } else
    if (difference > 15)   { text = 'Warm!'; } else
    if (difference > 8)    { text = 'Hot!'; } else
    if (difference > 1)    { text = 'Scorching!'; } else
    if (difference > 0)    { text = 'You\'re so close!'; } else
    text = 'You got it!';

    return { text };
};

export default connect(mapStateToDisplay)(FeedbackBar);
