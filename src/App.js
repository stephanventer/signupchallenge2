import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import WelcomePage from './components/WelcomePage';
import './styles.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
