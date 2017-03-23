import React from 'react';

import FeedbackBar from './feedback-bar';
import NumberEntryForm from './number-entry-form';
import GuessNo from './guess-no';
import GuessListDisplay from './guess-list-display';

export default function Game() {
    return (
        <div className="game">
          <FeedbackBar />
          <NumberEntryForm />
          <GuessNo />
          <GuessListDisplay />
        </div>
    );
}
