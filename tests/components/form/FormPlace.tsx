import * as React from 'react';
import {connect} from "react-redux";
import Form from './Form';
import {State} from "../../reducers/index";

interface Props {
    mainPage: boolean;
    isPlace: boolean;
    onClick: () => void;
}

const FormPlace = ({mainPage, isPlace, onClick}: Props) => {
    return (
        <div className="start">
            <div className="start-button">
                [
                <a href="#" onClick={onClick}>{mainPage ? 'Start a New Thread' : 'Reply'}</a>
                ]
            </div>
            {isPlace && <Form/>}
        </div>
    )
};

const mapStateToProps = (state: State, ownProps: {place: string}) => {
    return {
        mainPage: state.mainPage,
        isPlace:
    };
};

export default FormPlace;