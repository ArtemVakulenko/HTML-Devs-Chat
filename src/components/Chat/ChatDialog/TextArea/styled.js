import styled from 'styled-components';

export const StTextArea = styled.textarea`
  resize: none;
  width: 80%;
  height: 95%;
  margin: 15px;
  padding: 15px 10px;
  background: ${({ colors, theme }) => colors[theme].input};
  border-radius: 10px;
  outline: none;
  border: none;
  color: ${({ colors, theme }) => colors[theme].color};
  font-size: 14px;
  min-width: 290px;
  &::placeholder {
    color: ${({ colors, theme }) => colors[theme].placeholder};
  }
`;
