import { connect } from 'react-redux';
import { userInfoValue } from 'store/modals/selectors';
import { setUserInfoValue } from 'store/modals/actions';
import ModalIpt from './ModalIpt';

const mapStateToProps = (state, props) => ({
  value: userInfoValue(state, props.field),
});
const mapDispatchToProps = (dispatch, props) => ({
  onChange: (value) => dispatch(setUserInfoValue(props.field, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalIpt);
