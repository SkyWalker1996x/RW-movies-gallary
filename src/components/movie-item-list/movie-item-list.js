import React from "react";
import MovieItem from "../movie-item/movie-item";
import {MoviesWrapper} from "../../styles/movie-item-list/movie-item-list";


const MovieItemList = ({movies, img_base, onDeletedMovie, onAddedWillWatch}) => {

    const moviesList = movies.map((movie) => {
        const {id} = movie;

        return (
            <MovieItem
                key={id}
                movie={movie}
                img_base={img_base}
                onDeletedMovie={() => onDeletedMovie(movies, id)}
                onAddedWillWatch={() => onAddedWillWatch(movies, id)}/>
        )
    });

    return (
        <MoviesWrapper>
            {moviesList}
        </MoviesWrapper>
    )
};

export default MovieItemList;