import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { icons } from 'constants';
import AuthHeader from './AuthHeader';
import { useTheme } from '../hooks';
import NotAuthHeader from './NotAuthHeader';
import { StHeader, StLogo } from './styled';

const Header = ({ location }) => {
  const { colors, theme } = useTheme();
  const path = location.pathname;
  const buttons = useMemo(() => {
    if (path === '/' || path === '/registration') {
      return <NotAuthHeader />;
    }
    return <AuthHeader />;
  }, [path]);

  return (
    <StHeader colors={colors} theme={theme}>
      <StLogo src={icons.logoIcon} alt="logoIcon" />
      <div>
        {buttons}
      </div>
    </StHeader>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;

Header.propTypes = {
  location: PropTypes.object.isRequired,
};
