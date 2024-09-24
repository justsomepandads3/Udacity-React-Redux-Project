import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {  Provider  } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import usersReducer from "./reducers/users"
import quesitonsReducer from "./reducers/questions"
import authedUserReducer from "./reducers/authedUser"
import {configureStore} from "@reduxjs/toolkit"
import AuthProvider from './components/ProtectedRoute';

const store = configureStore({
  reducer: {
    users: usersReducer,
    questions: quesitonsReducer,
    authedUser: authedUserReducer,

  },
})

//===========Old way of creating store============
// const store = createStore(reducer, middlewares)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);


