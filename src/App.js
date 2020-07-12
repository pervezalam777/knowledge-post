import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './routes/app-router';
import HeaderNavigation from './components/header-navigation';

function App() {
  return (
    <Router>
      <header className="navbar navbar-expand navbar-light bg-light">
       <HeaderNavigation/>
      </header>
      <main>
        <AppRouter />
      </main>
    </Router>
  );
}

export default App;
