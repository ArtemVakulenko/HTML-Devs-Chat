import styled from 'styled-components';

export const StUserMessageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 15%;
    padding: 10px;
    height: auto;
`;

export const StGuestMessageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 15%;
    padding: 10px;
`;

export const StUserMessageItem = styled.div`
    background-color: ${({ colors, theme }) => colors[theme].message};
    display: flex;
    border-radius: 10px;
    max-width: 50%;
    min-width: 100px;
    flex-direction: column;
    height: fit-content;
    padding: 5px 10px;
`;

export const StGuestMessageItem = styled.div`
    background-color: ${({ colors, theme }) => colors[theme].secondary};
    border-radius: 10px;
    display: flex;
    max-width: 50%;
    min-width: 100px;
    flex-direction: column;
    height: fit-content;
    padding: 5px 10px;
`;

export const StGuestName = styled.div`
    color: ${({ colors, theme }) => colors[theme].guestName};
    font-size: 1.1rem;
    font-weight: bold;
`;

export const StUserMessageContent = styled.div`
    color: ${({ colors, theme }) => colors[theme].font};
    margin-top: 5px;
    word-wrap: break-word;
`;

export const StGuestMessageContent = styled.div`
    color: ${({ colors, theme }) => colors[theme].color};
    margin-top: 5px;
    word-wrap: break-word;
`;

export const StDate = styled.div`
    color: grey;
    display: flex;
    justify-content: flex-end;
    padding: 3px;
    margin: 3px;
    font-size: 0.6rem;
`;
