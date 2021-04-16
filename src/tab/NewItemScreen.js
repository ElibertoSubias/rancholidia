import React, { Component } from 'react';
import { Platform, Image, Text, TextInput, View, Alert, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';import Constants from 'expo-constants';

export class NewItemScreen extends Component {
    render() {
        function escanearCodigo() {
            Platform.OS === 'web' ? alert('Abriendo') : Alert.alert(
                'Aviso',
                'Abriendo Escaner',
                [
                  {text: 'Ask me later', onPress: () => alert('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }
        function buscarFotografia() {
            Platform.OS === 'web' ? alert('Buscar foto') : Alert.alert(
                'Aviso',
                'Buscando Imagen',
                [
                  {text: 'Ask me later', onPress: () => alert('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }
        function capturarFotografia() {
            Platform.OS === 'web' ? alert('Capturar foto') : Alert.alert(
                'Aviso',
                'Capturando Imagen',
                [
                  {text: 'Ask me later', onPress: () => alert('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }
        function guardar() {
            Platform.OS === 'web' ? alert('Guardando') : Alert.alert(
                'Aviso',
                'Guardado',
                [
                  {text: 'Ask me later', onPress: () => alert('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }
        return ( 
            <SafeAreaView style={globalStyles.container}>
                <ScrollView style={globalStyles.scrollView}>
                    <Text style={globalStyles.title}>Agregar ganado</Text>
                    <View style={globalStyles.contenedorTextInput}>
                        <TextInput style={globalStyles.styleInput} placeholder="Num. sinniga"/>
                    </View>
                    <View style={globalStyles.cuentaActualContent}>
                        <Text 
                            style={globalStyles.cuentaActualText}
                            onPress={()=>escanearCodigo()}
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
                            onPress={()=>buscarFotografia()}
                        >
                            Buscar foto
                        </Text>
                    </View>
                    <View style={globalStyles.cuentaActualContent}>
                        <Text 
                            style={globalStyles.cuentaActualText}
                            onPress={()=>capturarFotografia()}
                        >
                            Capturar foto
                        </Text>
                    </View>
                    <View style={globalStyles.cuentaActualContentGuardar}>
                        <Text 
                            style={globalStyles.cuentaActualText}
                            onPress={()=>guardar()}
                        >
                            Guardar
                        </Text>
                    </View>
                    <Text style={{marginVertical: 150}}>
                    </Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}