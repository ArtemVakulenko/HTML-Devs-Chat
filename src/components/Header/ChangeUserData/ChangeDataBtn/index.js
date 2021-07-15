import { connect } from 'react-redux';
import { changeButtonData } from 'store/mainPage/selectors';
import ChangeDataBtn from './ChangeDataBtn';

const mapStateToProps = (state) => ({
  data: changeButtonData(state),
});
export default connect(mapStateToProps)(ChangeDataBtn);
