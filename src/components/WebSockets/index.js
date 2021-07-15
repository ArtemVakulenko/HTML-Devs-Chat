import { connect } from 'react-redux';
import { setNewRoom, setNewMessage } from 'store/mainPage/actions';
import { userId } from 'store/mainPage/selectors';
import WebSockets from './WebSockets';

const mapStateToProps = (state) => ({
  userId: userId(state),
});

const mapDispatchToProps = {
  setNewRoom, setNewMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(WebSockets);
