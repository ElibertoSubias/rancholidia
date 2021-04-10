import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../';

export class HomeScreen extends Component {
    render() {
        return ( 
            <SafeAreaView style={{flex: 1}}>
                {/* <CustomHeader title='Home' isHome={true} navigation={this.props.navigation}/> */}
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.myText}>Estoy en Home Tab</Text>
                    <TouchableOpacity
                        style={{marginTop: 20}}
                    >
                        <Text>Go Home Detail</Text>
                    </TouchableOpacity>
                </View> 
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    myText: {
        color: 'tomato',
        textAlign: 'center'
    }
});