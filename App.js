import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LoginScreen} from './src/auth';
import {RegisterScreen} from './src/auth';
import { HomeScreen, NewItemScreen, EditScreen } from './src/tab';
import ListItemScreen from './src/tab/ListItemScreen';

const Tab = createBottomTabNavigator();

const StackHome = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
});

function HomeStack() {
  return(
    <StackHome.Navigator initialRouteName="ListItem">
      <StackHome.Screen options={{headerShown: false, title: 'Listado'}} name="ListItem" component={ListItemScreen}/>
      <StackHome.Screen options={{headerShown: true, title: 'Modificar registro'}} name="Edit" component={EditScreen}/>
    </StackHome.Navigator>
  )
}

function TabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'NewItem') {
              iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
          } else if (route.name === 'ListItem') {
              iconName = focused ? 'md-list-circle' : 'md-list-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
      },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" options={{headerShown: false, title: 'Inicio'}} component={HomeScreen}/>
    <Tab.Screen name="NewItem" options={{headerShown: false, title: 'Agregar'}} component={NewItemScreen} />
    <Tab.Screen name="ListItem" options={{headerShown: false, title: 'Listado'}} component={HomeStack} />
  </Tab.Navigator>
  )
}

const StackApp = createStackNavigator();

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Thin' : require('./src/fonts/Montserrat-Thin.ttf'),
      'Bold' : require('./src/fonts/Montserrat-Bold.ttf'),
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.ttf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({isFontLoaded:true})
  }  

  render (){

    return (
      (this.state.isFontLoaded === true) 
      ? 
      (
        <>
          <NavigationContainer>  
            <StackApp.Navigator initialRouteName="Login">
            <StackApp.Screen options={navOptionHandler} name="HomeApp" component={TabNavigation}/>
              <StackApp.Screen options={navOptionHandler} name="Login" component={LoginScreen}/>
              <StackApp.Screen options={navOptionHandler} name="Register" component={RegisterScreen}/>
              <StackApp.Screen options={navOptionHandler} name="Edit" component={EditScreen}/>
            </StackApp.Navigator>
          </NavigationContainer>
          <StatusBar style="dark"/>
        </>
      )
      :
      (
        <>
          <AppLoading
            startAsync={this._cacheResourcesAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
          <StatusBar style="dark"/>
        </>
      )
    );
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/favicon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
