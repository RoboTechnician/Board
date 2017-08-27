import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        mainPage: state.mainPage
    }
};

export default connect(mapStateToProps)(App);