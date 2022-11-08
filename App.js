/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {DrawerNavigate} from './src/navigation/DrawerNavigation';
// import { TemperatureUnitSwitch } from './src/components/Buttons';
import { FavouriteLists } from './src/components/FlatListComponent';

import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigate />
    </Provider>
  );
};

export default App;
