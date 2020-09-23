import React from 'react';
import ContactUs from './ContactUs';
import RecievedForm from './RecievedForm';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={ContactUs} />
          <Route path='/received' component={RecievedForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
