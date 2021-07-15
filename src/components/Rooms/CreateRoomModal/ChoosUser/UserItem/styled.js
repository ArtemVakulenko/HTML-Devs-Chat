import styled from 'styled-components';

export const StUserItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  align-items: center;
  justify-items: center;
  padding: 5px 0;
  cursor: pointer;
  &:hover{
    background: ${({ colors, theme }) => colors[theme].input};
  }
`;

export const StAvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
  width: 38px;
  height: 38px;
  }
  span{
    margin-top: 4px;
    font-size: 12px;
    color: ${({ color, theme }) => color[theme].placeholder};
  }
`;

export const StCheck = styled.span`
  font-size: 32px;
  font-weight: 900;
  user-select: none;
`;
