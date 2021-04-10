import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListItem from './src/screens/ListItem';
import Edit from './src/screens/Edit';

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