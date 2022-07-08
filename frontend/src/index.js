import React from 'react';
import { render } from "react-dom";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import './index.css';
import App from './App';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={
          <h4>Página não encontrada!</h4>
        } />
      </Route>
      <Route path="/login" element={<Login />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);

