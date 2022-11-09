import {createSlice} from '@reduxjs/toolkit';
import {DataList} from '../assets/data';
import {RecentDataList} from '../assets/data';

const FavouriteinitialState = DataList;
const RecentInitialState = RecentDataList;

export const WeatherSlice = createSlice({
  name: 'favouriteList',
  initialState: {
    favList: FavouriteinitialState,
    RecentList: RecentInitialState,
    value: [],
    filterValue: [],
  },
  reducers: {
    addCity: (state, action) => {
      state.favList.push(action.payload);
      // state.value.push(action.payload);
      // state.filterValue.push(action.payload);
    },
    deleteCity: (state, action) => {
      console.log(action.payload.city)
      state.favList = state.favList.filter(site => site.id !== action.payload.id)
    },

  },
});

export const {addCity, deleteCity} = WeatherSlice.actions;
export default WeatherSlice.reducer;
