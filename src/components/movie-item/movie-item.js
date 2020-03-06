import React, {Component} from "react";
import Image from "../image/image";
import {
    Container,
    ButtonLike,
    ButtonsWrapper,
    ButtonShow,
    Title,
    VoteAverage
} from "../../styles/movie-item/movie-item";

class MovieItem extends Component {

    state = {
        show: false,
        like: false
    };

    onToggleProperty = (property) => {
        this.setState(() => {
            return {
                [property]: !this.state[property]
            }
        })
    };

    render() {
        const {show, like} = this.state;
        const {movie: {title, vote_average, backdrop_path, overview}, img_base} = this.props;
        const description = show ? overview : null;
        const btnLabel = show ? 'Hide' : 'Show';

        return (
            <Container>
                <Image src={img_base + backdrop_path} alt={title}/>
                <Title>{title}</Title>
                <VoteAverage>{vote_average}</VoteAverage>
                <ButtonsWrapper>
                    <ButtonShow
                        type="button"
                        onClick={() => this.onToggleProperty('show')}>
                        {btnLabel}
                    </ButtonShow>
                    <ButtonLike
                        like={like}
                        onClick={() => this.onToggleProperty('like')}>
                        Like
                    </ButtonLike>
                </ButtonsWrapper>
                <p>{description}</p>
            </Container>
        )
    }
}

export default MovieItem;