import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadMessages, locale } from 'devextreme/localization';
import ptMessages from 'devextreme/localization/messages/pt.json';
import {ContextProvider} from './Context';

loadMessages(ptMessages);
locale(navigator.language);

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);