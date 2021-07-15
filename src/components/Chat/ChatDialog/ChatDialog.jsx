import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'src/components/hooks';
import { StChatDialogContainer } from './styled';
import ChatHeader from './ChatHeader';
import SendMessage from './SendMessage';
import Dialog from './Dialog';
import GreetingCard from './GreetingCard';

const ChatDialog = ({ match }) => {
  const { colors, theme } = useTheme();
  const path = match.url;
  return path === '/main'
  ? <GreetingCard/>
  : (
    <StChatDialogContainer colors={colors} theme={theme}>
      <ChatHeader/>
        <Dialog/>
      <SendMessage/>
    </StChatDialogContainer>
  );
};

ChatDialog.propTypes = {
  match: PropTypes.object,
};

export default ChatDialog;
