import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainJsApp from './App';


ReactDOM.render(
  <MainJsApp />,
  document.getElementById('root')
);


reportWebVitals();
