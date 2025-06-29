import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Оптимизированная инициализация без placeholder
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Создаем root с оптимизациями
const root = createRoot(rootElement);

// Рендерим приложение сразу без задержек
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);