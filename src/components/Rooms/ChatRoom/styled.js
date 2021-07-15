import styled from 'styled-components';

export const StChatRoomContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  align-items: flex-end;
  cursor: pointer;
  background: ${({ colors, theme, isActive }) => (isActive ? colors[theme].button : 'inherit')};
  &:hover{
    background: ${({ colors, theme, isActive }) => (isActive ? colors[theme].button : colors[theme].input)};
  }
`;

export const StChatImg = styled.img`
  width: 50px;
  max-height: 50px;
`;

export const StInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const StMessageCount = styled.div`
  display: flex;
  border-radius: 100%;
  background: #5C9DDD;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: black;
  font-size: 12px;
`;
