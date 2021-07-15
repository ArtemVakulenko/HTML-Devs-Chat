import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'src/components/hooks';
import Button from 'src/components/_common/Button';
import { icons } from 'constants';
import {
  StUserMessageContainer,
  StUserMessageItem,
  StUserMessageContent,
  StDate,
} from './styled';

const UserMessage = ({ authorPic, content, date, onClick }) => {
  const { colors, theme } = useTheme();
  return (
    <StUserMessageContainer >
      <StUserMessageItem colors={colors} theme={theme}>
        <StUserMessageContent colors={colors} theme={theme}>
          {content}
        </StUserMessageContent>
        <StDate colors={colors} theme={theme}>
          {date}
        </StDate>
      </StUserMessageItem>
      <Button icon={authorPic || icons.defaultUserIcon} onClick={onClick} />
    </StUserMessageContainer>
  );
};

UserMessage.propTypes = {
  authorPic: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func,
};

export default UserMessage;
