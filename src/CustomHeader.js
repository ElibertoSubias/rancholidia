import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export class Custom extends Component {
    render() {
        let {navigation, isHome, title} = this.props;
        return ( 
            <SafeAreaView style={{flex: 1}}>
                <CustomHeader title='Home'/>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.myText}>Estoy en Home</Text>
                    <TouchableOpacity
                        style={{marginTop: 20}}
                    >
                        Go Home Detail
                    </TouchableOpacity>
                </View> 
            </SafeAreaView>
        );
    }
}