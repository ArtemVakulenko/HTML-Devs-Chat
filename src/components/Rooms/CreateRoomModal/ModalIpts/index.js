import { connect } from 'react-redux';
import { roomNameValue, searchValue, imgValue } from 'store/modals/selectors';
import { setRoomName, setSearchUser, setImg } from 'store/modals/actions';
import ModalIpts from './ModalIpts';

const mapStateToProps = (state) => ({
  imgName: imgValue(state, 'name'),
  roomValue: roomNameValue(state),
  searchValue: searchValue(state),
});

const mapDispatchToProps = {
  setImg,
  setRoomName,
  setSearchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalIpts);
