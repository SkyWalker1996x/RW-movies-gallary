import React, {Component} from 'react';
import MovieItem from "./movie-item/movie-item";
import {moviesData} from "../data/movies-data";
import {MoviesWrapper} from "../styles/app/app";

const _img_base = "https://image.tmdb.org/t/p/w500";


class App extends Component {

    state = {
        movies: moviesData
    };

    onDeletedMovie = (arr, id) => {
        const newArr = arr.filter(item => item.id !== id);

        this.setState(() => {
            return {
                movies: newArr
            }
        })
    };

    render() {
        const {movies} = this.state;

        const moviesList = movies.map((movie) => {
            const {id} = movie;

            return (
                <MovieItem
                    key={id}
                    movie={movie}
                    img_base={_img_base}
                    onDeletedMovie={() => this.onDeletedMovie(movies, id)}/>
            )
        });

        return (
            <MoviesWrapper>
                {moviesList}
            </MoviesWrapper>
        );
    }
}

export default App;
