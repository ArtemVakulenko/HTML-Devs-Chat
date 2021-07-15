import { connect } from 'react-redux';
import { setAuthValue } from 'store/auth/authActions';
import { getAuthData } from 'store/auth/selectors';
import AuthInput from './AuthInput';

const mapStateToProps = (state, props) => ({
  value: getAuthData(state, props.type, props.page),
});
const mapDispatchToProps = (dispatch, props) => ({
  onChange: (value) => dispatch(setAuthValue(props.type, value, props.page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthInput);
