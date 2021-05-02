import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'


import App from './App';
import rootReducer from './reducer/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
// ));

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
