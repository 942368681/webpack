import { connect } from 'react-redux';
import { changeText } from '../actions';
import Banner from '../components/banner';

const getdatas = () => {
    fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log('parsed json', json)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
};
const mapStateToProps = state => ({
    bannerText: state.bannerReducer.bannerText
});
const mapDispatchToProps = (dispatch) => ({
    changeText: newText => dispatch(changeText(newText)),
    getdatas: () => getdatas()
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Banner);