import React, {Component} from 'react';
import {Container, Wrapper} from "../styles/app/app";
import MovieItemList from "./movie-item-list/movie-item-list";
import MovieWillWatchList from "./MovieWillWatchList/movie-will-watch-list";
import MoviesService from "../data/movies-service";
import MovieTabs from "./movie-tabs/movie-tabs";


class App extends Component {

    moviesService = new MoviesService();

    state = {
        movies: [],
        moviesWillWatch: [],
        sort_by: 'popularity.desc',
        hasError: false
    };

    componentDidMount() {
        this.updateMovies()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.sort_by !== this.state.sort_by) {
            this.updateMovies()
        }
    }

    updateMovies = () => {
        this.moviesService
            .getResource(this.state.sort_by)
            .then((data) => this.onMoviesLoaded(data))
            .catch(() => {
                    this.setState({
                        hasError: true
                    })
                }
            )
    };

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

    onChangeSortMovies = (value) => {
        this.setState(({sort_by}) => {
            return {
                sort_by: value
            }
        })
    };

    render() {
        const {movies, moviesWillWatch, hasError, sort_by} = this.state;

        if (hasError) {
            return (
                <p>Here must be original picture and text</p>
            )
        }

        return (
            <Container>
                <MovieTabs
                    onChangeSortMovies={this.onChangeSortMovies}
                    sort_by={sort_by}/>
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
            </Container>

        );
    }
}

export default App;
