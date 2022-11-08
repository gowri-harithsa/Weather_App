import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import {FavouriteInitial} from '../screens/FavouriteScreenInitial';
import {RecentInitial} from '../screens/RecentSearchInitial';
import { Favourite } from '../screens/FavouriteScreen';
import { Recent } from '../screens/RecentScreen';


const Drawer = createDrawerNavigator();

export const DrawerNavigate = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{headerShown: false}}
          name="Favourite"
          component={Favourite}
        />
        <Drawer.Screen
          options={{headerShown: false}}
          name="Recent Search"
          component={Recent}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
