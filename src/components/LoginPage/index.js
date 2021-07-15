import { connect } from 'react-redux';
import { signInRequest, setErrorMessage } from 'store/auth/authActions';
import { getErrorMessage } from 'store/auth/selectors';
import LoginPage from './LoginPage';

const mapStateToProps = (state) => ({
  message: getErrorMessage(state),
});

const mapDispatchToProps = {
  signInRequest,
  setErrorMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
