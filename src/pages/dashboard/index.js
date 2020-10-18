/**
 * @file   首页
 * @author MissyLiu
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Counter from './components/Counter';
import reducer from './reducer';
import rootSaga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
const action = type => store.dispatch({type});

function render() {
    ReactDOM.render(
        <Router history={history}>
            <Counter
                value={store.getState()}
                onIncrement={() => action('INCREMENT')}
                onDecrement={() => action('DECREMENT')}
                onIncrementAsync={() => action('INCREMENT_ASYNC')}
            />
        </Router>,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);
