import React from 'react';
import { StyleSheet, Image, Text, TextInput, View, FlatList } from 'react-native';

const NewItem = ({route}) => {
    return ( 
        <View style={{ flex: 1, marginTop: 15}}>
            <Text style={styles.title}>Modificar registro</Text>
            <View style={styles.contenedorIcono}>
                <TextInput 
                    style={styles.styleInput} 
                    placeholder="Num. sinniga"
                    value={route.params.item.numSinniga}
                />
            </View>
            <View style={styles.cuentaActualContent}>
                <Text 
                    style={styles.cuentaActualText}
                    onPress={()=>navigation.navigate('Main')}
                >
                    Escanear Núm. Sinniga
                </Text>
            </View>
            <View style={{height: '30%', justifyContent: 'center', alignItems: 'center', marginTop: 30,}}>
                <View style={{height: '100%', width: '70%'}}>
                    <Image style={styles.imagen} source={require('../images/icon_image.jpg')}/>
                </View>
            </View>
            <View style={styles.cuentaActualContent}>
                <Text 
                    style={styles.cuentaActualText}
                    onPress={()=>navigation.navigate('Main')}
                >
                    Buscar foto
                </Text>
            </View>
            <View style={styles.cuentaActualContent}>
                <Text 
                    style={styles.cuentaActualText}
                    onPress={()=>navigation.navigate('Main')}
                >
                    Capturar foto
                </Text>
            </View>
            <View style={styles.cuentaActualContentGuardar}>
                <Text 
                    style={styles.cuentaActualText}
                    onPress={()=>navigation.navigate('Main')}
                >
                    Guardar
                </Text>
            </View>
        </View>
    );
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
 
export default NewItem;