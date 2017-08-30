import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        mainPage: state.mainPage,
        fixedForm: state.form.view.place === 'fixed',
        image: state.image.display
    }
};

export default connect(mapStateToProps)(App);