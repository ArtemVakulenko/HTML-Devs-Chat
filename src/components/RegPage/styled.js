import styled from 'styled-components';

export const StAuthContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StAuthView = styled.div`
  display: grid;
  grid-template-rows: repeat(4,1fr);
  row-gap: 15px;
  justify-items: center;
  align-items: center;
  background: ${({ colors, theme }) => colors[theme].secondary};
  border-radius: 10px;
  padding: 20px 60px;
`;
export const StErrorContainer = styled.div`
  min-height: 30px;
`;
