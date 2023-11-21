import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import './styles/app.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
