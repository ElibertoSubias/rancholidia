import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from './src/screens/ListItem';
import Edit from './src/screens/Edit';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createStackNavigator()

const FirstScreenNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: "Lista",
                    headerShown: false
                }}
                name="ListItem"
                component={ListItem}
            />
            <Stack.Screen
                options={{
                    title: "",
                    headerShown: true
                }}
                name="Edit"
                component={Edit}
            />
        </Stack.Navigator>
    )
}

export {FirstScreenNavigation}

const SecondScreenNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: "Login",
                    headerShown: false
                }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{
                    title: "Register",
                    headerShown: true
                }}
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    )
}

export {SecondScreenNavigation}