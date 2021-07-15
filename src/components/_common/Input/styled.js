import styled from 'styled-components';

export const StInput = styled.input`
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

export const StHidePass = styled.img`
  position: absolute;
  right:10px;
  bottom: 12px;
  cursor: pointer;
`;
