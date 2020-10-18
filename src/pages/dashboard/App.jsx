/**
 * @file   首页
 * @author MissyLiu
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';

const Dashboard = () => {
    return (
        <Switch>
            <Route component={Layout} />
        </Switch>
    );
};

export default Dashboard;
