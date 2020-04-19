import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Grid from './grid/Grid';
import FilteredGrid from './grid/FilteredGrid';
import SortedGrid from './grid/SortedGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/filter/:dep" component={FilteredGrid} />
          <Route path="/sort/:key" component={SortedGrid} />
          <Route path="/" exact component={Grid} />
        </Router>
      </header>
    </div>
  );
}

export default App;
