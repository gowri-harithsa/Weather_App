import {createSlice} from '@reduxjs/toolkit';
import {DataList} from '../assets/data';
import {RecentDataList} from '../assets/data';

const RecentInitialState = RecentDataList;

export const WeatherSlice = createSlice({
  name: 'favouriteList',
  initialState: {
    favList: [],
    RecentList: [RecentInitialState],
    value: [],
    recent: [],
    Favourite: false,
  },
  reducers: {
    addCity: (state, action) => {
      const city = state.favList.map(value => value.id);
      if (city.includes(action.payload.id)) {
        alert('Already Exists');
      } else {
        state.favList.push(action.payload);
        alert('Added to Favourite');
      }
    },
    addCityRecent: (state, action) => {
      state.recent.push(action.payload);
    },
    deleteCity: (state, action) => {
      console.log(action.payload.city);
      state.favList = state.favList.filter(
        site => site.id !== action.payload.id,
      );
    },
    deleteRecentSearchCity: (state, action) => {
      console.log(action.payload.city);
      state.recent = state.favList.filter(
        site => site.id !== action.payload.id,
      );
    },
    setFavourite: (state, action) => {
      state.Favourite = action.payload;
    },
    remove: (state, action) => {
      state.Favourite = [];
    },
    clear: (state, action) => {
      state.recent = [];
    },
  },
});

export const {
  addCity,
  deleteCity,
  setFavourite,
  addCityRecent,
  deleteRecentSearchCity,
  remove,
  clear,
  addEffect,
} = WeatherSlice.actions;
export default WeatherSlice.reducer;
