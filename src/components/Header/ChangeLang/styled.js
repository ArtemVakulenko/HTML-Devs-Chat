import styled from 'styled-components';

export const StSelect = styled.select`
  color: ${({ colors, theme }) => colors[theme].selectColor};
  padding: 3px;
  option{
    color: ${({ colors, theme }) => colors[theme].selectColor};
  }
`;
