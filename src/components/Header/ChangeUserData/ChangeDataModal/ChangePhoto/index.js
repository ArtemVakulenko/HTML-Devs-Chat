import { connect } from 'react-redux';
import { userImgValue } from 'store/modals/selectors';
import { setUserImg } from 'store/modals/actions';
import ChangePhoto from './ChangePhoto';

const mapStateToProps = (state) => ({
  value: userImgValue(state, 'name'),
  img: userImgValue(state, 'code'),
});
const mapDispatchToProps = {
  setUserImg,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangePhoto);
