import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadMessages, locale } from 'devextreme/localization';
import ptMessages from 'devextreme/localization/messages/pt.json';

loadMessages(ptMessages);
locale(navigator.language);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);