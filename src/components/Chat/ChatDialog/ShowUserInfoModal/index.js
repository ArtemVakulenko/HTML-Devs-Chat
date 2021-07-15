import { connect } from 'react-redux';
import { getUserToShow } from 'store/modals/selectors';
import ShowUserInfoModal from './ShowUserInfoModal';

const mapStateToProps = (state) => ({
  userToShow: getUserToShow(state),
});

export default connect(mapStateToProps, null)(ShowUserInfoModal);
