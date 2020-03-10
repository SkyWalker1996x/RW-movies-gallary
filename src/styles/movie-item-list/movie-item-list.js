import styled from "styled-components";

const MoviesWrapper = styled.div`
    max-width: 950px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

const Item = styled.p`
    border: 1px solid #ddd; 
    margin-top: -1px; 
    background-color: #f6f6f6; 
    padding: 12px; 
`;

export {
    MoviesWrapper,
    Item
}