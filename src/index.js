import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './ioc/services';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
