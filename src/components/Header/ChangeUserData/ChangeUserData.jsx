import React, { useState } from 'react';
import ChangeDataBtn from './ChangeDataBtn';
import ChangeDataModal from './ChangeDataModal';

const ChangeUserData = () => {
  const [isVisible, setVisible] = useState(false);
  const onCloseModal = () => {
    setVisible(false);
  };
  const onOpenModal = () => {
    setVisible(true);
  };
  return (
    <div>
      <ChangeDataBtn onClick={onOpenModal} />
      {isVisible ? <ChangeDataModal onClose={onCloseModal} /> : null}
    </div>
  );
};

export default ChangeUserData;
