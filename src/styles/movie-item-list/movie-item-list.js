import styled from "styled-components";

const MoviesWrapper = styled.div`
    max-width: 950px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
`;

const Item = styled.p`
    max-width: 200px;
    border: 1px solid #ddd; 
    margin-top: -1px; 
    background-color: #f6f6f6; 
    padding: 12px; 
`;

export {
    MoviesWrapper,
    Item
}