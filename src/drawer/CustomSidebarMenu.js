// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const BASE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
const proileImage = 'react_logo.png';

export default class CustomSidebarMenu extends React.Component {

  render (){
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/*Top Large Image */}
        {/* <Image
          source={{ uri: BASE_PATH + proileImage }}
          style={styles.sideMenuProfileIcon}
        /> */}
        <DrawerContentScrollView {...this.props}>
          <DrawerItemList {...this.props} />
          <DrawerItem
            label="Salir"
            onPress={()=>navigate('Login')}
          />
        </DrawerContentScrollView>
      </SafeAreaView>
    );
  }  
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});