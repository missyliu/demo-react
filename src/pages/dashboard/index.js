/**
 * @file   首页
 * @author MissyLiu
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import reducer from './reducer';

const history = createBrowserHistory();
const store = createStore(
    reducer
);
const action = type => store.dispatch({type});

function render() {
    ReactDOM.render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);
