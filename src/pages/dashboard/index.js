/**
 * @file   首页
 * @author MissyLiu
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from './App';

const history = createBrowserHistory();

function render() {
    ReactDOM.render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
}

render();
