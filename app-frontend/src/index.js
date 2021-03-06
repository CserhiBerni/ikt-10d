import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './Router';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar/Navbar";

console.log('%cCopyright %cBernát %cés %cKrisztián', 'color: red', 'color: lightgreen; font-weight: bold', 'color: red', 'color: cyan; font-weight: bold',)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="link-container">
      <Navbar />
    </div>
    <div className="mobile-view">
      <div className="mw-wrapper">
        <h1>Rossz a telefonod :(</h1>
      </div>
    </div>
    <MainRouter />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
