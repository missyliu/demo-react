/**
 * @file   页脚 Copyright
 * @author MissyLiu
 */
import React from 'react';
import {Typography, Link} from '@material-ui/core';

const Footer = () => {
    return (
        <React.Fragment>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://ad.baidu-int.com/">
                    广告投放平台
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </React.Fragment>
    );
};
Footer.propTypes = {};

export default Footer;
