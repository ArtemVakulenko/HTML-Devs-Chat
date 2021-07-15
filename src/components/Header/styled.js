import styled from 'styled-components';

export const StHeader = styled.header`
    padding: 5px 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 8fr 4fr;
    align-items: center;
    background-color: ${({ colors, theme }) => colors[theme].header};
    div{
        justify-self: flex-end;
        display: flex;
        align-items: center;
    }
`;

export const StLogo = styled.img`
    width: 50px;
`;
