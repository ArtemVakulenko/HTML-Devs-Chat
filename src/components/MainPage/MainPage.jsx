import React from 'react';
import { useTheme } from '../hooks';
import { StMainPageContainer } from './styled';
import Rooms from '../Rooms';
import ChatDialog from '../Chat/ChatDialog';
import WebSockets from '../WebSockets';

const MainPage = () => {
  const { colors, theme } = useTheme();
  return (
    <StMainPageContainer colors={colors} theme={theme}>
      <Rooms />
      <ChatDialog />
      <WebSockets />
    </StMainPageContainer>
  );
};

export default MainPage;
