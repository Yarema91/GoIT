// import Masonry from 'masonry-layout';
import React, { Component } from "react";


// const grid = document.querySelector('#gallery');

// const makeGridItem = (imgUrl) => {
//     const div = document.createElement('div');
//     div.classList.add('grid-item');

//     const img = document.createElement('img');
//     img.src = imgUrl;
//     div.appendChild(img);

//     return div;
// }
// const masonryInstance = new Masonry( grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//   //   gutter: 10,
//   transitionDuration: '0.2s',
//     percentPosition: true
//   });


// const baseUrl = "https://pixabay.com/api/?&page=${p}2&per_page=12&key=19990522-192333938ff44a78abde6ff11&q=cat&image_type=photo"
class Searchbar extends Component {
    state = {
        images: [],
        name: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '19990522-192333938ff44a78abde6ff11',
        page: 1,
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ name: value });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.onCreate(this.state)
    }


    onCreate = ({ name }) => {
        // console.log('oncreate', name);
        // fetch(`${this.state.apiUrl}/?&page=${this.state.page}&per_page=12&key=${this.state.apiKey}&q=${name}&image_type=photo`)
        fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${name}&page=${this.state.page}`)
            .then(res => {
                res.json()
                    .then(imageList => {
                        this.setState({ images: imageList.hits })
                    }
                    )
                })
                
    }

    render() {
        // const { images } = this.state;
        // console.log('images', images.hits);
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
                <ul className="ImageGallery">
                        {this.state.images.map(image => (
                            <li className="ImageGalleryItem">
                                <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
                            </li>
                        ))}
                       
                    </ul>
                    <button>Load more</button>
            </div>
        )
    }

}

export default Searchbar;
