import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearUnreadMessages, clearMessageValue } from 'store/mainPage/actions';
import ChatRoom from './ChatRoom';

const mapDispatchToProps = {
  clearUnreadMessages, clearMessageValue,
};
export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
)(ChatRoom);
