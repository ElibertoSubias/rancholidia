import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '@expo/vector-icons/AntDesign';
import Home from './Home';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
}

function CapturarItem({navigation}) {
    return (
      <View style={{ flex: 1, marginTop: 15}}>
        <Text style={styles.title}>Agregar Ganado</Text>
        <View style={styles.contenedorIcono}>
            <TextInput style={styles.styleInput} placeholder="Num. sinniga"/>
        </View>
        <View style={styles.cuentaActualContent}>
            <Text 
                style={styles.cuentaActualText}
                onPress={()=>navigation.navigate('MainNavigation')}
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

function ListaItem({navigation}) {
    console.log(navigation);
    const [item, setItem] = useState([
        { numSinniga: '5151515151', edad: 2, sexo: 'H', uri: '../image/cow.jpg'},
        { numSinniga: '1212121212', edad: 1, sexo: 'M', uri: '../image/cow.jpg'},
        { numSinniga: '2121212121', edad: 5, sexo: 'H', uri: '../image/cow.jpg'},
        { numSinniga: '1313131313', edad: 3, sexo: 'M', uri: '../image/cow.jpg'},
        { numSinniga: '1414141414', edad: 4, sexo: 'H', uri: '../image/cow.jpg'},
        { numSinniga: '1919191919', edad: 3, sexo: 'M', uri: '../image/cow.jpg'},
    ]);
    return (
      <View  style={{ flex: 1, width: '100%', marginTop: 15}}>
        <Text style={styles.title}>Lista</Text>
        <FlatList 
            style={{width: '100%'}}
            keyExtractor={(item)=> item.numSinniga}
            // numColumns={2}
            data={item}
            renderItem={({ item }) => (
                <View style={styles.containerItem}>
                    <Image style={styles.itemImage} source={require('../images/cow.jpg')}/>
                    <View style={{height:150, width: '50%'}}>
                        <View style={{ flex: 4}}>
                            <Text style={styles.itemTitle}>Num.: {item.numSinniga}</Text>
                            <Text style={styles.itemTitle}>Sexo: {item.sexo}</Text>
                            <Text style={styles.itemTitle}>Edad: {item.edad}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center'}}>
                            <Icon name="delete" color="#00716F" size={24} style={{marginLeft:15}}/>
                            <Icon 
                                name="edit" 
                                color="#00716F" 
                                size={24}
                                onPress={()=>this.props.navigation.navigate('Edit')}
                            />
                        </View>
                    </View>
                </View>
            )}
        />
      </View>
    );
}
  
function SettingsScreen() {
    return (
        <View  style={{ flex: 1, marginTop: 15}}>
        <Text style={styles.title}>Configuraciones</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default class MainNavigation extends React.Component{
    render() {
        const {navigate} = this.props.navigation;
        // https://oblador.github.io/react-native-vector-icons/
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                        } else if (route.name === 'Capturar') {
                            iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
                        } else if (route.name === 'Lista') {
                            iconName = focused ? 'md-list-circle' : 'md-list-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    })}
                    tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Capturar" component={CapturarItem} />
                    <Tab.Screen name="Lista" component={ListaItem} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
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
  