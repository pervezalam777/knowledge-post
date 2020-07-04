import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './routes/app-router';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <h3>nav bar</h3>
        </nav>
      </header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <span>footer section...</span>
      </footer>
    </Router>
  );
}

export default App;
