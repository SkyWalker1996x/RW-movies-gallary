import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    margin: 5px;
    border: 1px solid #e7e7e7;
    background-color: #ffffff;
`;

const Title = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    font-size: 24px;
`;

const VoteAverage = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    color: grey;
    font-size: 18px; 
`;

const ButtonsWrapper = styled.div`
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    min-width: 125px;
    padding: 12px 15px;
    margin: 3px;
    border: 2px solid black;
    background-color: white;
    border-radius: 3px;
    color: black;
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

const ButtonWillWatch = styled(Button)`
    color: #ffffff;
    background-color: #4CAF50;
    border-color: #4CAF50;
`;

const ButtonRemoveWillWatch = styled(Button)`
    color: #ffffff;
    background-color: #3399ff;
    border-color: #3399ff;
`;

const ButtonDelete = styled(Button)`
    color: #ff3300;
    border-color: #ff3300;
    &:hover {
        background-color: #ff3300;
        color: #ffffff; 
    }
`;

export {
    Container,
    Title,
    VoteAverage,
    ButtonsWrapper,
    ButtonShow,
    ButtonWillWatch,
    ButtonRemoveWillWatch,
    ButtonDelete
}
