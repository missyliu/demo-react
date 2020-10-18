/**
 * @file   Header
 * @author MissyLiu
 */
import './index.less';
import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: {
        // flexGrow: 1
    },
    nav: {
        flexGrow: 1,
        marginLeft: 54
    },
    navItem: {
        float: 'left',
        marginLeft: 40,
        height: 64,
        lineHeight: '64px'
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        广告投放平台
                    </Typography>
                    <nav className={classes.nav}>
                        <Typography
                            component="h2"
                            variant="subtitle1"
                            color="inherit"
                            noWrap
                            className={`${classes.navItem} active`}
                        >
                            首页
                        </Typography>
                        <Typography
                            component="h2"
                            variant="subtitle1"
                            color="inherit"
                            noWrap
                            className={classes.navItem}
                        >
                            推广
                        </Typography>
                        <Typography
                            component="h2"
                            variant="subtitle1"
                            color="inherit"
                            noWrap
                            className={classes.navItem}
                        >
                            报表
                        </Typography>
                        <Typography
                            component="h2"
                            variant="subtitle1"
                            color="inherit"
                            noWrap
                            className={classes.navItem}
                        >
                            资产
                        </Typography>
                        <Typography
                            component="h2"
                            variant="subtitle1"
                            color="inherit"
                            noWrap
                            className={classes.navItem}
                        >
                            工具
                        </Typography>
                    </nav>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
Header.propTypes = {};

export default Header;
