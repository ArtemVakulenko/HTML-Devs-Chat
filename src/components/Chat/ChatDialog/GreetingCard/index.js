import { connect } from 'react-redux';
import { userName } from 'store/mainPage/selectors';
import GreetingCard from './GreetingCard';

const mapStateToProps = (state) => ({
  userName: userName(state),
});

export default connect(mapStateToProps, null)(GreetingCard);
