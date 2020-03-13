import React, {Component} from "react";
import Image from "../image/image";
import {
    Container,
    ButtonWillWatch,
    ButtonsWrapper,
    Title,
    VoteAverage,
    ButtonDelete, ButtonRemoveWillWatch
} from "../../styles/movie-item/movie-item";

class MovieItem extends Component {

    state = {
        show: false,
        willWatch: false
    };

    onWillWatch = () => {
        this.setState({
            willWatch: true
        });

        this.props.onAddedWillWatch()
    };

    onRemoveWillWatch = () => {
        this.setState({
            willWatch: false
        });

        this.props.onDeletedWillWatch()
    };

    render() {
        const {willWatch} = this.state;
        const {movie: {title, vote_average, backdrop_path}, img_base, onDeletedMovie} = this.props;
        const img_path = backdrop_path ? img_base + backdrop_path : 'https://picsum.photos/1200/675';
        const button = willWatch ?
            <ButtonRemoveWillWatch
                onClick={() => this.onRemoveWillWatch()}>
                Remove
            </ButtonRemoveWillWatch>
            : <ButtonWillWatch
                onClick={() => this.onWillWatch()}>
                Will Watch
            </ButtonWillWatch>;

        return (
            <Container>
                <Image
                    src={img_path}
                    alt={title}/>

                <Title>
                    {title}
                </Title>

                <VoteAverage>
                    Rating: {vote_average}
                </VoteAverage>

                <ButtonsWrapper>
                    {button}

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