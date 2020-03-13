import React, {Component} from 'react';
import {Container, Wrapper} from "../styles/app/app";
import MovieItemList from "./movie-item-list/movie-item-list";
import MovieWillWatchList from "./MovieWillWatchList/movie-will-watch-list";
import MoviesService from "../data/movies-service";
import MovieTabs from "./movie-tabs/movie-tabs";
import MoviesPagination from "./movies-pagination/movies-pagination";


class App extends Component {

    moviesService = new MoviesService();

    state = {
        movies: [],
        moviesWillWatch: [],
        sort_by: 'popularity.desc',
        page: 1,
        totalPages: null,
        hasError: false
    };

    componentDidMount() {
        this.updateMovies();
        this.updateTotalPages()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
            this.updateMovies()
        }
    }

    updateMovies = () => {
        const {sort_by, page} = this.state;

        this.moviesService
            .getMovies(sort_by, page)
            .then((data) => this.onMoviesLoaded(data))
            .catch(() => {
                    this.setState({
                        hasError: true
                    })
                }
            )
    };

    updateTotalPages = () => {
        const {sort_by, page} = this.state;

        this.moviesService.getTotalPage(sort_by, page)
            .then((data) => this.onTotalPagesLoaded(data))
    };

    onTotalPagesLoaded = (totalPages) => {
        this.setState({totalPages})
    };

    onMoviesLoaded = (movies) => {
        this.setState(() => {
            return {
                movies
            }
        })
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

    onPageChange = (page) => {
        this.setState(() => {
            return {page}

        })
    };

    render() {
        const {movies, moviesWillWatch, hasError, sort_by, page, totalPages} = this.state;


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
                <MoviesPagination
                    onPageChange={this.onPageChange}
                    totalPages={totalPages}
                    page={page}/>
            </Container>
        );
    }
}

export default App;
