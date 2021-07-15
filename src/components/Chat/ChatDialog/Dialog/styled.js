import styled from 'styled-components';

export const StDialogContainer = styled.div`
  height: 75%;
  overflow-x: hidden ;
  overflow-y: auto;
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
