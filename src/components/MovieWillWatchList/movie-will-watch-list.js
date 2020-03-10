import React from "react";
import {Item} from "../../styles/movie-item-list/movie-item-list";


const MovieWillWatchList = ({moviesWillWatch}) => {

    const moviesLength = moviesWillWatch.length;

    const moviesList = moviesWillWatch.map((item) => {
        const {id, title} = item;

        return (
            <Item
                key={id}>
                {title}
            </Item>
        )
    });

    return (
        <div>
            <p>Will Watch: {moviesLength}</p>
            {moviesList}
        </div>
    )
};

export default MovieWillWatchList;