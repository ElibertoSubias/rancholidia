import React, { Component } from 'react';
import { StyleSheet, Image, Text, TextInput, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles';

export class EditScreen extends Component {
    render() {
        return ( 
            <SafeAreaView style={globalStyles.container}>
                <ScrollView style={globalStyles.scrollView}>
                    <View style={{marginBottom: 200}}>
                        <View style={globalStyles.contenedorTextInput}>
                            <TextInput 
                                style={globalStyles.styleInput} 
                                placeholder="Num. sinniga"
                                value={this.props.route.params.item.numSinniga}
                            />
                        </View>
                        <View style={globalStyles.cuentaActualContent}>
                            <Text 
                                style={globalStyles.cuentaActualText}
                                onPress={()=>navigation.navigate('Main')}
                            >
                                Escanear Núm. Sinniga
                            </Text>
                        </View>
                        <View style={{height: '30%', justifyContent: 'center', alignItems: 'center', marginTop: 30,}}>
                            <View style={{height: '100%', width: '70%'}}>
                                <Image style={globalStyles.imagen} source={require('../images/icon_image.jpg')}/>
                            </View>
                        </View>
                        <View style={globalStyles.cuentaActualContent}>
                            <Text 
                                style={globalStyles.cuentaActualText}
                                onPress={()=>navigation.navigate('Main')}
                            >
                                Buscar foto
                            </Text>
                        </View>
                        <View style={globalStyles.cuentaActualContent}>
                            <Text 
                                style={globalStyles.cuentaActualText}
                                onPress={()=>navigation.navigate('Main')}
                            >
                                Capturar foto
                            </Text>
                        </View>
                        <View style={globalStyles.cuentaActualContentGuardar}>
                            <Text 
                                style={globalStyles.cuentaActualText}
                                onPress={()=>navigation.navigate('Main')}
                            >
                                Guardar
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}