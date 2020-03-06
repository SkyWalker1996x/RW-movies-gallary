import styled from "styled-components";

const Container = styled.div`
    max-width: 300px;
    padding: 5px;
    margin: 5px;
`;

const Title = styled.p`
    font-size: 24px;
    padding-left: 10px;
`;

const VoteAverage = styled.p`
    color: grey;
    font-size: 18px;
    padding-left: 10px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
`;

const ButtonShow = styled(Button)`
    border-color: #e7e7e7;
    color: black;
    &:hover {
        background: #e7e7e7;
    }
`;

const ButtonLike = styled(Button)`
    color: ${props => props.like ? "#ffffff" : "#4CAF50"};
    background-color: ${props => props.like ? "#4CAF50" : "#ffffff"};
    border-color: #4CAF50;
    &:hover {
        background-color: #4CAF50;
        color: #ffffff; 
    }
`;

export {
    Container,
    Title,
    VoteAverage,
    ButtonsWrapper,
    ButtonShow,
    ButtonLike
}
