import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import { IntlProvider } from 'react-intl';
import "bootstrap/dist/css/bootstrap.min.css";

let userLeng = navigator.language;
let messages = localeEsMessages;
if (userLeng.includes("en")) messages = localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={userLeng} messages={messages}>
    <App />
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
