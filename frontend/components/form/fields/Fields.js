import React from 'react';
import PropTypes from 'prop-types';
import SubmitContainer from '../../../containers/form/fields/SubmitContainer';
import NameContainer from '../../../containers/form/fields/NameContainer';
import ThemeContainer from '../../../containers/form/fields/ThemeContainer';
import CommentContainer from '../../../containers/form/fields/CommentContainer';
import FileLinkContainer from '../../../containers/form/fields/FileLinkContainer';
import FileContainer from '../../../containers/form/fields/FileContainer';

const Fields = ({linkField}) => (
    <table>
        <tbody>
        <SubmitContainer/>
        <NameContainer/>
        <ThemeContainer/>
        <CommentContainer/>
        {linkField && <FileLinkContainer/>}
        <FileContainer/>
        </tbody>
    </table>
);

Fields.propTypes = {
    linkField: PropTypes.bool.isRequired
};

export default Fields;