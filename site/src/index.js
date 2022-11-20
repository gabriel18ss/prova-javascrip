import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContarI from './paginas/exer9';
import Asterisco from './paginas/exer10';
import Alunos from './paginas/qtdAlunos';
import CalcularAçai from './paginas/ex1';
import VereficarLibra from './paginas/ex2';
import CalcularGramas from './paginas/ex3';
import CalcularSalario from './paginas/ex4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalcularSalario />
  </React.StrictMode>
);


