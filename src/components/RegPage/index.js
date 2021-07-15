import { connect } from 'react-redux';
import { signUpRequest } from 'store/auth/authActions';
import { getErrorMessage } from 'store/auth/selectors';
import RegPage from './RegPage';

const mapStateToProps = (state) => ({
  message: getErrorMessage(state),
});

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegPage);
