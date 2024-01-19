import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import SliderLogicProvider from './contexts/SliderLogicProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SliderLogicProvider>
      <App />
    </SliderLogicProvider>
  </React.StrictMode>,
);
