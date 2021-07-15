import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'src/components/hooks';
import Button from 'src/components/_common/Button';
import { icons } from 'constants';
import { useTranslation } from 'react-i18next';
import { NotificationManager } from 'react-notifications';
import { StSendMessageContainer } from './styled';
import TextArea from '../TextArea/TextArea';

const SendMessage = ({
  match,
  userName,
  sendMessage,
  messageValue,
  setMessageValue }) => {
  const { t } = useTranslation();

  const handleSendMessage = () => {
    const room = match.params.id;
    const date = new Date().getTime();
    const body = {
      author: userName,
      content: messageValue.trim(),
      date,
      room,
    };
    if (!messageValue || /^ *$/.test(messageValue)) {
      NotificationManager.error(t('messageRequired'), t('Error'), 3000);
    }
    sendMessage(body);
  };
  const handleChange = (value) => {
    setMessageValue(value);
  };
  const { colors, theme } = useTheme();

  return (
    <StSendMessageContainer colors={colors} theme={theme}>
      <TextArea placeholder='enterYourMessage' value={messageValue} onChange={handleChange} onKeyDown={handleSendMessage} />
      <Button icon={icons.sendMessage} onClick={handleSendMessage} />
    </StSendMessageContainer>
  );
};

SendMessage.propTypes = {
  messageValue: PropTypes.string,
  setMessageValue: PropTypes.func,
  sendMessage: PropTypes.func,
  match: PropTypes.object,
  userName: PropTypes.string,
  // userPic: PropTypes.string,
};

export default SendMessage;
