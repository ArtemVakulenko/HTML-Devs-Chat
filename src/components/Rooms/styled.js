import styled from 'styled-components';

export const StRoomContainer = styled.div`
  background: ${({ colors, theme }) => colors[theme].secondary};
  height: ${window.innerHeight - 77}px;
`;
export const StChatRoomContainer = styled.div`
  overflow: hidden auto ;
  height: 75%;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(155, 155, 158, 0.15);
    border-radius: 5px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(201, 201, 201, 0.5);
    border-radius: 5px;
  }
`;
