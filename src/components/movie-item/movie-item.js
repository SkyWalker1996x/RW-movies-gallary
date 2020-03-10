import React, {Component} from "react";
import Image from "../image/image";
import {
    Container,
    ButtonLike,
    ButtonsWrapper,
    Title,
    VoteAverage,
    ButtonDelete
} from "../../styles/movie-item/movie-item";

class MovieItem extends Component {

    state = {
        show: false,
        willWatch: false
    };

    onWillWatch = () => {
        if (this.state.willWatch) {
            return
        }

        this.setState({
            willWatch: true
        });

        this.props.onAddedWillWatch()
    };

    render() {
        const {like} = this.state;
        const {onDeletedMovie} = this.props;
        const {movie: {title, vote_average, backdrop_path}, img_base} = this.props;

        return (
            <Container>
                <Image
                    src={img_base + backdrop_path}
                    alt={title}/>

                <Title>
                    {title}
                </Title>

                <VoteAverage>
                    Rating: {vote_average}
                </VoteAverage>

                <ButtonsWrapper>
                    <ButtonLike
                        like={like}
                        onClick={() => this.onWillWatch()}>
                        Will Watch
                    </ButtonLike>

                    <ButtonDelete
                        onClick={onDeletedMovie}>
                        Delete
                    </ButtonDelete>
                </ButtonsWrapper>
            </Container>
        )
    }
}

export default MovieItem;