import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const storeIndexJs = store
root.render(
  <React.StrictMode>
    <Provider store={storeIndexJs}>
      <App />
    </Provider>
  </React.StrictMode>
);

