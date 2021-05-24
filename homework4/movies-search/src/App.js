import React from 'react';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import PageError from './PageError';

function App() {
  return (
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item"><Link to="/">Home</Link></li>
        <li className="navigation__item"><Link to="/movies">Movies</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies" component={MoviesPage} />
        <Route path="*">
          <PageError />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
