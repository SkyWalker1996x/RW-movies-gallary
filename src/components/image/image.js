import React from "react";
import {ImageFilm} from "../../styles/image/image";

const Image = ({src, alt}) => {
    return (
        <ImageFilm src={src} alt={alt}/>
    )
};

export default Image;