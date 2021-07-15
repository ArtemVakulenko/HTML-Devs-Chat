import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CustomLink = ({ path, title }) => {
  const { t } = useTranslation();
  return (
    <Link to={path}>
      {t(title)}
    </Link>
  );
};

export default CustomLink;

CustomLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
