import { connect } from 'react-redux';
import { searchValue } from 'store/mainPage/selectors';
import { setSearchValue } from 'store/mainPage/actions';
import Search from './Search';

const mapStateToProps = (state) => ({
  value: searchValue(state),
});
const mapDispatchToProps = {
  onChange: setSearchValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
