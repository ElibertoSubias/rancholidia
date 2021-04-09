import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Black' : require('./src/fonts/NotoSansSC-Black.otf'),
      'Bold' : require('./src/fonts/NotoSansSC-Bold.otf'),
      'Light' : require('./src/fonts/NotoSansSC-Light.otf'),
      'Medium' : require('./src/fonts/NotoSansSC-Medium.otf'),
      'Regular' : require('./src/fonts/NotoSansSC-Regular.otf'),
      'Thin' : require('./src/fonts/NotoSansSC-Thin.otf')
    });
    this.setState({isFontLoaded:true})
  }

  render (){
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />)
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
