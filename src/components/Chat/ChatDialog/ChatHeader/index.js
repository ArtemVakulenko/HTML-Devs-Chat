import { connect } from 'react-redux';
import { activeRoom } from 'store/mainPage/selectors';
import { clearActiveRoom, clearMessageValue } from 'store/mainPage/actions';
import ChatHeader from './ChatHeader';

const mapStateToProps = (state) => ({
  activeRoom: activeRoom(state),
});
const mapDispatchToProps = {
  clearActiveRoom, clearMessageValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
