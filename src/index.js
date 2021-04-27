import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import RegistrationPage from './allPages/RegistrationPage';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <CssBaseline />
    {/* <App /> */}
    <RegistrationPage />
    <ToastContainer />
  </Provider>,
  document.getElementById('root'),
);
