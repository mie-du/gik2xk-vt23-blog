import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a25593'
    },
    secondary: {
      main: '#7c9862'
    },
    success: {
      main: '#388e3c'
    }
  },
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Phudu", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '2.6rem'
    },
    h2: {
      fontSize: '2.2rem',
      marginBottom: '0.5em'
    },
    h3: {
      fontSize: '1.7rem',
      color: '#713B66'
    }
  }
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
