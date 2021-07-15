import React from 'react';
import PropTypes from 'prop-types';
import { StChooseUser } from './styled';
import UserItem from './UserItem';

export const ChooseUser = ({ users, setChoosenUser }) => {
  return (
    <StChooseUser>
      {users.map((user) => {
        return (
          <UserItem
            id={user._id}
            key={user._id}
            img={user.img}
            userName={user.login}
            isOnline={user.online}
            setChoosenUser={setChoosenUser}
          />
        );
      })}
    </StChooseUser>
  );
};

export default ChooseUser;

ChooseUser.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setChoosenUser: PropTypes.func.isRequired,
};
