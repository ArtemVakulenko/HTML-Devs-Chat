import { getMessages } from 'store/mainPage/actions';
import { messages, userId } from 'store/mainPage/selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Dialog from './Dialog';

const mapStateToProps = (state) => ({
  messages: messages(state),
  userId: userId(state),
});
const mapDispatchToProps = (dispatch) => ({
  getMessages: (payload) => dispatch(getMessages(payload)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Dialog);
