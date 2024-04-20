import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import PortfolioPage from './PortfolioPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </div>
    </Router>
  );
}

export default App;
