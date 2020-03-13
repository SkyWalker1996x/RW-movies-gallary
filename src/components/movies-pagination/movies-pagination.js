import React from "react";
import {ButtonDefault} from "../../styles/movie-item/movie-item";

const MoviesPagination = ({onPageChange, page, totalPages}) => {

    const onNextPage = (page) => {
        let nextPage = page + 1;

        if (page < 500) {
            onPageChange(nextPage)
        }
    };

    const onPrevPage = (page) => {
        let prevPage = page - 1;

        if (page > 1) {
            onPageChange(prevPage)
        }
    };

    return (
        <div>
            <ButtonDefault
                onClick={() => onPrevPage(page)}>
                Prev
            </ButtonDefault>
            <span>{page} of {totalPages}</span>
            <ButtonDefault
                onClick={() => onNextPage(page)}>
                Next
            </ButtonDefault>
        </div>
    )
};

export default MoviesPagination;