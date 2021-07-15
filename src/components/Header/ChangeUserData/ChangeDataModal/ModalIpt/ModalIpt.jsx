import React from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/_common/Input';

const ModalIpt = ({ value, onChange, field }) => (
  <Input value={value} onChange={onChange} placeholder={field} />
);
export default ModalIpt;

ModalIpt.propTypes = {
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
