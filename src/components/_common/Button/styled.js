import styled from 'styled-components';

export const StButton = styled.button`
    color:  ${({ colors, theme }) => colors[theme].buttonText};
    height: 2rem;
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border: 2px solid  ${({ colors, theme }) => colors[theme].button};
    border-radius: 10px;
    background-color: ${({ colors, theme }) => colors[theme].button};
    cursor: pointer;
    :hover {
        border: 2px solid  ${({ colors, theme }) => colors[theme].main};
    }
`;
export const StIcon = styled.button`
    height: 40px;
    width: 40px;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border: none;
    border-radius: 10px;
    background: url(${(props) => props.icon}) no-repeat;
    cursor: pointer;
    background-size: contain;
    :hover {
        border: 2px solid  transparent
    }
`;
