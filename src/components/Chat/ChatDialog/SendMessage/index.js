import { connect } from 'react-redux';
import { messageValue, userName, getUserPic } from 'store/mainPage/selectors';
import { setMessageValue, sendMessage } from 'store/mainPage/actions';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import SendMessage from './SendMessage';

const mapStateToProps = (state) => ({
  messageValue: messageValue(state),
  userName: userName(state),
  userPic: getUserPic(state),
});
const mapDispatchToProps = (dispatch) => ({
  setMessageValue: (payload) => dispatch(setMessageValue(payload)),
  sendMessage: (payload) => dispatch(sendMessage(payload)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SendMessage);
