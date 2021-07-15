import React from 'react';
import PropTypes from 'prop-types';
import { icons } from 'constants';
import Button from 'src/components/_common/Button';
import { StButtonUser } from './styled';

const ChangeDataBtn = ({ data, onClick }) => {
  return (
    <StButtonUser >
      <Button
        icon={data.img || icons.defaultUserIcon}
        onClick={onClick}
      />
      <span>{data.login}</span>
    </StButtonUser>
  );
};

export default ChangeDataBtn;

ChangeDataBtn.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
