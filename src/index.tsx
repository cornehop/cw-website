import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CwApp } from './CwApp';
import { Provider } from 'react-redux';
import store from './Store/ConfigureStore';

ReactDOM.render(
    <Provider store={store}>
        <CwApp />
    </Provider>, 
    document.getElementById('root')
);