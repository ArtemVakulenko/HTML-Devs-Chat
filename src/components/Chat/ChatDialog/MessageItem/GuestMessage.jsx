import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'src/components/hooks';
import Button from 'src/components/_common/Button';
import { icons } from 'constants';
import { 
    StGuestMessageContainer, 
    StGuestMessageItem,
    StGuestName,
    StGuestMessageContent,
    StDate,
   } from './styled';

const GuestMessage = ({ authorPic, authorName, content, date, onClick }) => {
    const { colors, theme } = useTheme();
    return (
        <StGuestMessageContainer>
        <Button icon={authorPic || icons.defaultUserIcon} onClick={onClick}/>
        <StGuestMessageItem colors={colors} theme={theme}>
          <StGuestName colors={colors} theme={theme}>
            {authorName}
          </StGuestName>
          <StGuestMessageContent colors={colors} theme={theme}>
            {content}
          </StGuestMessageContent>
          <StDate colors={colors} theme={theme}>
            {date}
          </StDate>
        </StGuestMessageItem>
        </StGuestMessageContainer>
    );
};

GuestMessage.propTypes = {
    authorPic: PropTypes.string,
    authorName: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    onClick: PropTypes.func,
};

export default GuestMessage;
