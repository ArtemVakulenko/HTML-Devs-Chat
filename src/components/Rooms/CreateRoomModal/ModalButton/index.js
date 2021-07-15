import { connect } from 'react-redux';
import { createChat } from 'store/modals/actions';
import { roomNameValue } from 'store/modals/selectors';
import { chooseUsers } from '../../../../store/modals/selectors';
import ModalButton from './ModalButton';

const mapStateToProps = (state) => ({
  users: chooseUsers(state),
  roomName: roomNameValue(state),
});
const mapDispatchToProps = { createChat };

export default connect(mapStateToProps, mapDispatchToProps)(ModalButton);
