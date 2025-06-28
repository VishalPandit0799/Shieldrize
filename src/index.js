import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from './Pages/Home.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home />
  </>
);

