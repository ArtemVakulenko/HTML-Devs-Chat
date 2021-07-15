import { connect } from 'react-redux';
import Rooms from './Rooms';
import { rooms } from '../../store/mainPage/selectors';
import { getMainPageData, setActiveRoom } from '../../store/mainPage/actions';
import { setErrorMessage } from '../../store/auth/authActions';
import { getErrorMessage } from '../../store/auth/selectors';

const mapStateToProps = (state) => ({
  rooms: rooms(state),
  errorMsg: getErrorMessage(state),
});
const mapDispatchToProps = {
  getMainPageData, setActiveRoom, setErrorMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
