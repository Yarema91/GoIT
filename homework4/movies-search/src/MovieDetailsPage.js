import React from 'react';

function MovieDetailsPage( {match} ) {
    // console.log(rest);
    return (
        <div className="product">
           {`Movie is a ${match.params.moviesId}`}
        </div>
    )
}

export default MovieDetailsPage
