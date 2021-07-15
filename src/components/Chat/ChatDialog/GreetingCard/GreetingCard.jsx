import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StGreetingCardContainer, StGreetingCardMessage } from './styled';

const GreetingCard = ({ userName }) => {
  const { t } = useTranslation();
  const hello = t('Hello');
   const greeting = t('Greeting');
  return (
    <StGreetingCardContainer>
      <StGreetingCardMessage>
        {hello}
        {userName}
        {greeting}
      </StGreetingCardMessage>
    </StGreetingCardContainer>
  );
};

GreetingCard.propTypes = {
  userName: PropTypes.string,
};

export default GreetingCard;
