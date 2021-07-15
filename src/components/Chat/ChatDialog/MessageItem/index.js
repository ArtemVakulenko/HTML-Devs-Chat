import { userName, getUserPic } from 'store/mainPage/selectors';
import { connect } from 'react-redux';
import { getOneUser } from 'store/modals/actions';
import MessageItem from './MessageItem';

const mapStateToProps = (state) => ({
  userName: userName(state),
  userPic: getUserPic(state),
});

const mapDispatchToProps = {
  getOneUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);
