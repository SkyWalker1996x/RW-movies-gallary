import React from 'react';
import MovieItem from "./movie-item/movie-item";

const _img_base = "https://image.tmdb.org/t/p/w500";

const movie = {
    vote_count: 4592,
    id: 299536,
    video: false,
    vote_average: 8.5,
    title: "Avengers: Infinity War",
    popularity: 160.36938,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    original_language: "en",
    original_title: "Avengers: Infinity War",
    backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    adult: false,
    overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    release_date: "2018-04-25"
};

const App = () => {
    return (
        <div>
            <MovieItem movie={movie} img_base={_img_base}/>
        </div>
    );
};

export default App;
