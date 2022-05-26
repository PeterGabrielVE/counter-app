import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<CounterApp value={ 10 } />);