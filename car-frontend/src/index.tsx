import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';

// context
import { Provider as UserProvider } from 'common/context/UserContext';

// store
import store from 'app/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </UserProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
