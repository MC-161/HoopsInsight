import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);


// Remove the preloader and show the main content after React is mounted
window.onload = () => {
  const preloader = document.getElementById('preloader');
  const root = document.getElementById('root');

  if (preloader && root) {
    // Fade out the preloader
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';

    // Hide preloader and show the main content after fade-out
    setTimeout(() => {
      if (preloader) preloader.style.display = 'none';
      if (root) root.style.display = 'block';
    }, 500); // Match the duration of the opacity transition
  }
};
