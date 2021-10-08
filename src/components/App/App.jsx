/* CSS import */
import './App.css';

/* Custom Component Imports */
import LandingPage from '../LandingPage/LandingPage';

import ProductList from '../ProductList/ProductList'

import { HashRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/storefront">
          <ProductList />
        </Route>
      </div>
    </Router>
  );
}