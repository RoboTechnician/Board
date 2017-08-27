import React from 'react';
import PropTypes from 'prop-types';

const File = ({file, utilsDisplay, inputFile, fileBtn, mouseEnter, mouseLeave, add, deleted}) => (
    <div style={{width: '100%'}}>
        <div className="file-input" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="file-input-tbl" onClick={inputFile}>
                <div className="file-input-cl">
                    {file ?
                        <img title={file.name} src={file.uri}/>
                        :
                        'Drop File Here'
                    }
                </div>
            </div>
            <div className="file-utils" style={{display: utilsDisplay}}>
                {fileBtn ?
                    <div className="file-btn add" onClick={add} title="Enter the link manually"></div>
                    :
                    <div className="file-btn delete" onClick={deleted} title="Delete file"></div>
                }
            </div>
        </div>
    </div>
);

File.propTypes = {
    file: (props, propName, componentName) => {
        if (props[propName] !== null && props[propName].constructor.name !== 'File') {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },
    utilsDisplay: PropTypes.string.isRequired,
    inputFile: PropTypes.func.isRequired,
    fileBtn: PropTypes.bool.isRequired,
    mouseEnter: PropTypes.func.isRequired,
    mouseLeave: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
};

export default File;