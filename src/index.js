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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    giphyArr,
    gifphyCategory,

                }),
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
