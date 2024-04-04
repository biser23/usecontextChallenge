import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RoutesApp />
      </Router>
    </ThemeProvider>
  );
}

export default App;
