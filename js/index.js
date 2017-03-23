require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Game from './components/game';
import TopBar from './components/top-bar';

document.addEventListener('DOMContentLoaded', () =>
                          ReactDOM.render(
                              <Provider store={store}>
                                <div>
                                  <TopBar />
                                  <h1>HOT or COLD</h1>
                                  <Game />
                                </div>
                              </Provider>, document.getElementById('app')
                          ));
