import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, Alert, ScrollView, Platform } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { globalStyles } from '../styles';import Constants from 'expo-constants';

export const ListItemScreen = ({navigation}) => {
    const [items, setItem] = useState([
        { numSinniga: '5151515151', edad: 2, sexo: 'H', uri: '../image/cow.jpg'},
        { numSinniga: '1212121212', edad: 1, sexo: 'M', uri: '../image/cow.jpg'},
        { numSinniga: '2121212121', edad: 5, sexo: 'H', uri: '../image/cow.jpg'},
        { numSinniga: '1313131313', edad: 3, sexo: 'M', uri: '../image/cow.jpg'},
        { numSinniga: '1414141414', edad: 4, sexo: 'H', uri: '../image/cow.jpg'},
        { numSinniga: '1919191919', edad: 3, sexo: 'M', uri: '../image/cow.jpg'},
    ]);
    if (items.length == 0) {
        Alert('Nada')
    }
    function confirmarEliminar() {
        Platform.OS !== 'web' ? (Alert.alert(
            'Aviso',
            '¿Desea eliminar?',
            [
              {text: 'Sí', onPress: () => alert('Ask me later pressed')},
              {text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
        )) : (
            alert('Aviso', 'Desea eliminar', ['Sí', 'No'])
        )
    }
    return (
        <SafeAreaView style={globalStyles.container}>
            {/* <Text style={globalStyles.title}>Listado</Text> */}
            <FlatList 
                style={{width: '100%'}}
                keyExtractor={(items)=> items.numSinniga}
                // numColumns={2}
                data={items}
                renderItem={({ item }) => (
                    <View style={globalStyles.containerItem}>
                        <Image style={globalStyles.itemImage} source={require('../images/cow.jpg')}/>
                        <View style={{height:150, width: '50%'}}>
                            <View style={{ flex: 4}}>
                                <Text style={globalStyles.itemTitle}>Num.: {item.numSinniga}</Text>
                                <Text style={globalStyles.itemTitle}>Sexo: {item.sexo}</Text>
                                <Text style={globalStyles.itemTitle}>Edad: {item.edad}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <Icon 
                                    name="delete" 
                                    color="#00716F" 
                                    size={24} 
                                    style={{marginLeft:15}}
                                    onPress={() => confirmarEliminar()}
                                />
                                <Icon 
                                    name="edit" 
                                    color="#00716F" 
                                    size={24}
                                    onPress={()=>navigation.navigate('Edit', {item})}
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        width: '94%',
        marginTop: 24,
        padding: 10,
        backgroundColor: '#dee2dc',
        borderRadius: 10,
        marginHorizontal: '3%',
        marginTop: 24,
    },
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20
    },
    itemImage: {
        width: '50%',
        height: 150,
    },
    itemTitle: {
        paddingLeft: 10,
        fontSize: 20,
    },
    imagen: {
        flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        resizeMode: "contain",
    },
    logo: {
        flex: 1
    },
    contenedorLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nuevoUsuario: {
        alignSelf: 'center',
        color: '#00716F',
        fontFamily: 'Bold',
        paddingVertical: 30,
    },
    cuentaActualContent: {
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#00716F',
        paddingVertical: 8,
        borderRadius: 23
    },
    cuentaActualContentGuardar: {
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#13b30d',
        paddingVertical: 8,
        borderRadius: 23
    },
    cuentaActualText: {
        color: 'white',
        fontFamily: 'Bold'
    },
    styleInput: {
        paddingHorizontal: 10
    },
    contenedorIcono: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 35,
        paddingHorizontal: 10,
        borderColor: '#00716F',
        borderRadius: 23,
        paddingVertical: 2
    },
    image_movil: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '50%',
        backgroundColor: '#cfcfcf'
    },
    image_web: {
        flexDirection: 'row',
        width: '50%',
        height: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain'
    },
    title: {
        alignSelf: 'center',
        fontSize: 28,
        fontFamily: 'Black'
    },
    description: {
        fontFamily:"Light",
        marginHorizontal:55,
        textAlign:'center',
        marginTop:5,
        opacity:0.4
    }
});