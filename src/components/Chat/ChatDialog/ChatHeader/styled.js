import styled from 'styled-components';

export const StChatDialogHeader = styled.div`
    padding: 5px 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ colors, theme }) => colors[theme].secondary};
`;

export const StChatTitle = styled.div`
    margin-left: 25px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    width: 90%;
`;  
