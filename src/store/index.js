import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import show from './categories.js';

let reducers = combineReducers({show});

const store = () => {
    return createStore(reducers, composeWithDevTools());

};

export default store() ;