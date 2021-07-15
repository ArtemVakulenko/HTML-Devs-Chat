import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AppTitle } from './styled';

const Title = ({ title, isTranslate = true }) => {
  const { t } = useTranslation();
  return (
    <AppTitle>
      {isTranslate ? t(title) : title}
    </AppTitle>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  isTranslate: PropTypes.bool,
};
