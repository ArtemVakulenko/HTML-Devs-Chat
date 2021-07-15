import styled from 'styled-components';

export const StMainPageContainer = styled.div`
  width: 100%;
  background: ${({ colors, theme }) => colors[theme].main};
  display: grid;
  grid-template-columns: 30% 70%;
  overflow: hidden;
`;
