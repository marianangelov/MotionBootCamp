import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Grid from './grid/Grid';

import Create from './create-page/Create'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create" exact component={Create} />
          <Route path="/" exact component={Grid} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
