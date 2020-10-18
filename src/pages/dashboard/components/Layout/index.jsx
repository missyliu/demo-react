/**
 * @file   布局
 * @author MissyLiu
 */
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({text}) => {
    return (
        <React.Fragment>
            {text}
        </React.Fragment>
    );
};
Layout.propTypes = {
    text: PropTypes.string.isRequired
};

export default Layout;
