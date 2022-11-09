import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import FavouritesListReducer from '../redux/FavouritesListSlice';
import WeatherDataReducer from '../redux/WeatherDataSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer  = combineReducers({
  favouritesListDetail: FavouritesListReducer,
  WeatherDataList: WeatherDataReducer,
});

const persistedRed = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedRed,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const store = configureStore({
//     reducer: {
//         favouritesListDetail : FavouritesListReducer
//     },
// });
