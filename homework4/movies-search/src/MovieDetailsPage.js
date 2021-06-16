import React, { Component } from 'react';

 //https://api.themoviedb.org/3/movie/550?api_key=fd26603781d9481141467cba5a515b0f
class MovieDetailsPage extends Component {
    state = {
        movies: [],
        userAvatar: null,
        userName: null,
        userLocation: null,
    }

    componentDidMount() {
        this.getMovieData(this.props.match.params.movieId)
    }

    componentDidUpdate(prevProps) {
        const currrentMovieId = this.props.match.params.movieId;
        if (prevProps.match.params.movieId !== currrentMovieId) {
            this.getMovieData(this.props.match.params.movieId)
        }

    }

    getMovieData = (movieId) => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=140aa2a61156d040b45d8a45da490f38`)
            .then(res => res.json())
            .then(MovieList => {
              
                const { poster_path, original_title, overview } = MovieList;
                this.setState({
                    userAvatar: poster_path,
                    userName: original_title,
                    userLocation: overview,
                })
                 }
            )
    }

    render() {
        const { userAvatar, userName, userLocation } = this.state;
        console.log(this.state);
        if (!userAvatar || !userName || !userLocation)
            return null;
        return (
            <div className="product">
                <img src={`https://image.tmdb.org/t/p/w342/${userAvatar}`}
                    alt="Movie Avatar"
                />
                <div>
                    <span>{userName}</span>
                    <span>{userLocation}</span>
                </div>
                {/* {`Movie is a here`} */}
            </div>
        )
    }

}

export default MovieDetailsPage
