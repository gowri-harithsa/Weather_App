import {configureStore} from '@reduxjs/toolkit';
import FavouritesListReducer from '../redux/FavouritesListSlice';

const store = configureStore({
    reducer: {
        favouritesListDetail : FavouritesListReducer
    },
});
export default store;