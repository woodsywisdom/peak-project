import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto-Condensed",
      "Roboto",
      "Helvetica",
      "Arial",
      'sans-serif'
    ].join(','),
  }
});


if (process.env.NODE_ENV !== 'production') {
  const getCSRFToken = () => {
    return fetch("/api/csrf/token");
  };

  getCSRFToken();
}

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={THEME} >
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
