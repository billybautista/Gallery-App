import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import { Image, SafeAreaView } from 'react-native';
import { AppRoute } from './AppRoute';
import customStyles from '../style/customStyles';
import Home from '../screens/HomeScreen';
import Favorite from '../screens/FavoriteScreen';
import CustomDrawerHeader from '../components/DrawerHeader';

const Drawer = createDrawerNavigator();
const { main, black } = customStyles;

const CustomDrawer = (props: DrawerContentComponentProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomDrawerHeader />
    <DrawerItemList {...props} />
  </SafeAreaView>
);

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName={AppRoute.HOME}
    screenOptions={{
      headerShown: false,
      drawerActiveTintColor: main,
      drawerInactiveTintColor: black,
    }}
    drawerContent={props => <CustomDrawer {...props} />}
  >
    <Drawer.Screen
      name={AppRoute.HOME}
      component={Home}
      options={{
        drawerIcon: ({ color }) => (
          <Image
            source={require('../assets/home.png')}
            style={{ width: 26, height: 26, tintColor: color, marginTop: 4 }}
          />
        ),
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    />
    <Drawer.Screen
      name={AppRoute.FAVORITES}
      component={Favorite}
      options={{
        drawerIcon: ({ color }) => (
          <Image
            source={require('../assets/favorite.png')}
            style={{ width: 26, height: 26, tintColor: color, marginTop: 4 }}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigation;
