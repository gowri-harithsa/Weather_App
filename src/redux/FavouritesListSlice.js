import {createSlice} from '@reduxjs/toolkit';
import {DataList} from '../assets/data';
import {RecentDataList} from '../assets/data';


export const WeatherSlice = createSlice({
  name: 'favouriteList',
  initialState: {
    favList: [],
    value: [],
    recent: [],
    Favourite: false,
    noFavourite: false,
    remove: false
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
      const city = state.recent.map(value => value.id);
      if (city.includes(action.payload.id)) {
      } else {
        state.recent.push(action.payload);
      }
    },
    deleteCity: (state, action) => {
      console.log(action.payload.city);
      state.favList = state.favList.filter(
        site => site.id !== action.payload.id,
      );
    },
    deleteRecentSearchCity: (state, action) => {
      state.recent = state.recent.filter(
        site => site.id !== action.payload.id,
      );
    },
    setFavourite: (state, action) => {
      state.Favourite = action.payload;
    },
    remove: (state, action) => {
      state.favList = [];
    },
    clear: (state, action) => {
      state.recent = [];
    },
    noFavouriteAdded: (state, action) => {
      state.noFavourite = action.payload
    },
    removeRecent: (state, action) => {
      state.remove = action.payload
    }
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
  noFavouriteAdded,
  removeRecent,
} = WeatherSlice.actions;
export default WeatherSlice.reducer;
