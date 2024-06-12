import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './context/contextApi';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </AppContext>
   
  
);


reportWebVitals();
