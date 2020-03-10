import React, {Component} from 'react';
import {Wrapper} from "../styles/app/app";
import MovieItemList from "./movie-item-list/movie-item-list";
import MovieWillWatchList from "./MovieWillWatchList/movie-will-watch-list";
import MoviesService from "../data/movies-service";


class App extends Component {

    moviesService = new MoviesService();

    state = {
        movies: [],
        moviesWillWatch: [],
        hasError: false
    };

    componentDidMount() {
        this.moviesService
            .getResource()
            .then((data) => this.onMoviesLoaded(data))
            .catch(() => {
                    this.setState({
                        hasError: true
                    })
                }
            )
    }

    onMoviesLoaded = (movies) => {
        this.setState({movies})
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
        const {movies, moviesWillWatch, hasError} = this.state;

        if(hasError) {
            return (
                <p>Here must be original picture and text</p>
            )
        }

        return (
            <Wrapper>
                <MovieItemList movies={movies}
                               moviesWillWatch={moviesWillWatch}
                               img_base={this.moviesService._IMG_URL}
                               onDeletedMovie={this.onDeletedMovie}
                               onAddedWillWatch={this.onAddedWillWatch}
                               onDeletedWillWatch={this.onDeletedWillWatch}/>

                <MovieWillWatchList
                    moviesWillWatch={moviesWillWatch}/>
            </Wrapper>
        );
    }
}

export default App;
