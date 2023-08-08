import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RegisterContextProvider } from './context/MyContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterContextProvider>
      <Router>
        <App />
      </Router>
    </RegisterContextProvider>
  </React.StrictMode>,
)
