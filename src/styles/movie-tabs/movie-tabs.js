import styled from "styled-components";

const TabsWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const Tab = styled.button`
    min-width: 125px;
    padding: 12px 15px;
    margin: 3px;
    border: 2px solid #00ace6;
    background-color: white;
    border-radius: 3px;
    color: ${props => props.active ? "#ffffff" : "#00ace6"};
    font-size: 16px;
    cursor: pointer;
    background-color: ${props => props.active ? "#00ace6" : "#ffffff"};
`;

export {
    TabsWrapper,
    Tab
}