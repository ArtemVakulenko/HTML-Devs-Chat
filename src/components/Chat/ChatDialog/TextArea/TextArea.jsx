import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks';
import { StTextArea } from './styled';

const TextArea = ({ value, placeholder, onChange, onKeyDown }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onKeyDown();
    }
  };
  return (
    <StTextArea
      theme={theme}
      value={value}
      colors={colors}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={t(placeholder)}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextArea;
