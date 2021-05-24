// import Masonry from 'masonry-layout';
import Loader from 'react-loader-spinner';
import React, { Component } from "react";

// const baseUrl = "https://pixabay.com/api/?&page=${p}2&per_page=12&key=19990522-192333938ff44a78abde6ff11&q=cat&image_type=photo"
class Searchbar extends Component {
    state = {
        images: [],
        name: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '19990522-192333938ff44a78abde6ff11',
        page: 1,
        perpage: 12,
        loading: false
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ name: value });

    };
    //search btn
    handleSubmit = (event) => {
        event.preventDefault();
        this.onCreate(this.state)
        this.setState({ images: [] }); // для очищкння нового пошуку
    }


    onCreate = ({ name }) => {

        // console.log('oncreate', name);
        // fetch(`${this.state.apiUrl}/?&page=${this.state.page}&per_page=12&key=${this.state.apiKey}&q=${name}&image_type=photo`)
        fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${name}&per_page=${this.state.perpage}&page=${this.state.page}`)
            .then(res => {
                res.json()
                    .then(imageList => {
                        this.setState({ images: imageList.hits })
                    }
                    ).finally(() => this.setState({ loading: true }));
            })
    }
    //load more
    handleClick = event => {
        event.preventDefault();
        console.log('click');
        this.setState({
            page: this.state.page + 1,

        })
        // console.log(this.state.page);
        fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.name}&per_page=${this.state.perpage}&page=${this.state.page}`)
            .then(res => {
                res.json()
            .then(images => {
                 this.setState(prevList => ({
                // images: [...prevList.images, ...images.hits],
                images: prevList.images.concat(images.hits)
                        })
                        )

                    }
                ).finally(() => this.setState({ loading: true }));
            })



    }

    render() {
        // const { images } = this.state;
        console.log('images', this.state.images);
        return (
            <div>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={this.handleSubmit}>
                        <button type="submit" className="SearchForm-button">
                            <span className="SearchForm-button-label">Search</span>
                        </button>

                        <input
                            className="SearchForm-input"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                            // autocomplete="off"
                            // autofocus
                            placeholder="Search images and photos"
                        />
                    </form>

                </header>
                { this.state.loading && (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={2000} />
                )}

                <ul className="ImageGallery">

                    {this.state.images.map(image => (
                        <li key={image.id} className="ImageGalleryItem">
                            <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
                        </li>
                    ))}
                </ul>


                {this.state.images.length > 0 ? <button onClick={this.handleClick}>Load more</button> : null}
            </div>
        )
    }

}

export default Searchbar;
