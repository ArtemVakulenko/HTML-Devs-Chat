import { connect } from 'react-redux';
import { getAllUsers } from '../../../store/modals/actions';
import CreateRoom from './CreateRoom';

const mapDispatchToProps = {
  getAllUsers,
};
export default connect(null, mapDispatchToProps)(CreateRoom);
