import React, { Component } from 'react';
import { moviesData } from "../data/movies-data";
import { Wrapper } from "../styles/app/app";
import MovieItemList from "./movie-item-list/movie-item-list";
import MovieWillWatchList from "./MovieWillWatchList/movie-will-watch-list";

const _img_base = "https://image.tmdb.org/t/p/w500";


class App extends Component {

    state = {
        movies: moviesData,
        moviesWillWatch: []
    };

    onDeletedMovie = (arr, id) => {
        const newArr = arr.filter(item => item.id !== id);

        this.setState(() => {
            return {
                movies: newArr
            }
        })
    };

    onAddedWillWatch = (arr, addId) => {
        const movie = arr.filter(item => item.id === addId);
        const newArr = [...this.state.moviesWillWatch, ...movie];

        this.setState({
            moviesWillWatch: newArr
        })
    };

    onDeletedWillWatch = (arr, removeId) => {
        const newMoviesList = arr.filter(item => item.id !== removeId);

        this.setState({
            moviesWillWatch: newMoviesList
        })
    };


    render() {
        const {movies, moviesWillWatch} = this.state;

        return (
            <Wrapper>
                <MovieItemList movies={movies}
                               img_base={_img_base}
                               onDeletedMovie={this.onDeletedMovie}
                               onAddedWillWatch={this.onAddedWillWatch}/>

                <MovieWillWatchList
                    moviesWillWatch={moviesWillWatch}
                    onDeletedWillWatch={this.onDeletedWillWatch}/>
            </Wrapper>
        );
    }
}

export default App;
