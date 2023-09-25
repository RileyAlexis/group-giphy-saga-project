import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, all} from 'redux-saga/effects';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import App from './components/App/App';




const giphyArr = (state = [], action) => {
    if (action.type === 'SETGIFS') {
        return action.payload;
    }
    return state;
}

const gifphyCategory = (state = [], action) => {
    return state;
}

const giphyFavorites = (state = [], action) => {
    if (action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    else if (action.type === 'ADD_FAVORITE', action) {
        return [...state, action.payload];
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    giphyArr,
    gifphyCategory,
    giphyFavorites

                }),
    applyMiddleware(sagaMiddleware, logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
