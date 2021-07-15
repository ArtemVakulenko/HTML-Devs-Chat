import styled from 'styled-components';

export const StIpts = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`;

export const StFileIpt = styled.label`
  display: inline-block;
  background-color: ${({ colors, theme }) => colors[theme].button};
  color:  ${({ colors, theme }) => colors[theme].buttonText};
  padding: 0.25rem 1rem;
  font-family: sans-serif;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
