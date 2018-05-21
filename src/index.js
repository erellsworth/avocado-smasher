import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import appInfo from './reducers/appInfo';

var reducers = combineReducers({
    appInfo: appInfo
});

const store = createStore(reducers);

function render () {   
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

store.subscribe(render);

render();