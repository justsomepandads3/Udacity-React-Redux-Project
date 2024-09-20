import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import middlewares from './middleware';
import {createStore} from "redux";
import {  Provider  } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const store = createStore(reducer, middlewares)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);


