import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import contactReducer from './reducers/contactReducer'
import { Provider } from 'react-redux';

const store = createStore(contactReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
