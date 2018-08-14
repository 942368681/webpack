import { connect } from 'react-redux';
import { changeText } from '../actions';
import Banner from '../components/banner';

const mapStateToProps = state => ({
    bannerText: state.bannerReducer.bannerText
});
const mapDispatchToProps = (dispatch) => ({
    changeText: newText => dispatch(changeText(newText))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Banner);