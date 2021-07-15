import { connect } from 'react-redux';
import { sendUserInfo } from 'src/store/modals/actions';
import ModalButton from './ModalButton';

const mapDispatchToProps = { onClick: sendUserInfo };
export default connect(null, mapDispatchToProps)(ModalButton);
