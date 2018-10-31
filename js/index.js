require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Game from './components/game';
import TopBar from './components/top-bar';
import HighScore from './components/high-score';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={ store }>
          <div>
            <TopBar />
            <h1>HOT or COLD</h1>
            <Game />
            <HighScore />
          </div>
        </Provider>, document.getElementById('app')
    ));
