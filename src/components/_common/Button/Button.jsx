import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StButton, StIcon } from './styled';
import { useTheme } from '../../hooks';

const Button = ({ value, icon, onClick }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return icon ? (
    <StIcon
      colors={colors}
      theme={theme}
      icon={icon}
      onClick={onClick}
    />
  ) : (
    <StButton
      colors={colors}
      theme={theme}
      onClick={onClick}
    >
      {t(value)}
    </StButton>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
