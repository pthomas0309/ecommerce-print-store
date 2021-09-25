/* CSS import */
import './App.css';

/* Custom Component Imports */
import LandingPage from '../LandingPage/LandingPage';

import { HashRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <LandingPage />
        </Route>
      </div>
    </Router>
  );
}