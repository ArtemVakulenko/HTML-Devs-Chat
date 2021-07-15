import { connect } from 'react-redux';
import { users } from 'store/modals/selectors';
import { setChoosenUser } from 'store/modals/actions';
import ChooseUser from './ChooseUser';

const mapStateToProps = (state) => ({
  users: users(state),
});

const mapDispatchToProps = {
  setChoosenUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseUser);
