import React from 'react';
import { Route, Link } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';

function MoviesPage({ match }) {
    return (
        <div className="page__content">
            <h1>Movies</h1>
            <ul className="navigation">
                <li className="navigation__item"><Link to={`${match.url}/king`}>King</Link></li>
                <li className="navigation__item"><Link to={`${match.url}/hitmen`}>Hitmen</Link></li>
            </ul>
            <Route path={`${match.url}/:movieTitle`} component={MovieDetailsPage}  />
              
            <Route exact path={match.url}>
                <span>Select movies please</span>
            </Route>
        </div>
    )
}

export default MoviesPage
