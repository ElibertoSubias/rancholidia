import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../../src/context/context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProfileScreen = ({navigation}) => {
    const { signOut } = React.useContext(AuthContext);
    const storeData = async () => {
        console.log('remove')
        try {
          await AsyncStorage.removeItem('@rancho-lidia-123')
        } catch (e) {
          // saving error
        }
    }
    const cerrarSesion = () => {
        storeData();
        signOut();
    }
    return (
        <>
            <Text>Profile Screen</Text>
            <Button title="Sign Out" onPress={() => cerrarSesion()} />
        </>
    )
}
