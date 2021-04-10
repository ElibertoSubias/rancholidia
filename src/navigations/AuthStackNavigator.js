import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Authavigator = createStackNavigator({
    Login: Login,
    Register: Register
});

export default Authavigator;
