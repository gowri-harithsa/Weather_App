import {createSlice} from '@reduxjs/toolkit';
import {DataList} from '../assets/data';
import {RecentDataList} from '../assets/data';

const FavouriteinitialState = DataList;
const RecentInitialState = RecentDataList;

export const WeatherSlice = createSlice({
  name: 'favouriteList',
  initialState: {
    favList: FavouriteinitialState,
    RecentList: [RecentInitialState],
    value: [],
    filterValue: [],
    Favourite: false
  },
  reducers: {
    addCity: (state, action) => {
      // console.log('sate valuee', state.favList

      const city = state.favList.map(value => value.id);
      if (city.includes(action.payload.id)) {
        alert('Already Exists')
      } else {
        state.favList.push(action.payload);
        alert('Added to Favourite')
      }
    },
    deleteCity: (state, action) => {
      console.log(action.payload.city);
      state.favList = state.favList.filter(
        site => site.id !== action.payload.id,
      );
    },
    setFavourite: (state, action) => {
      state.Favourite = action.payload;
    }
  },
});

export const {addCity, deleteCity, setFavourite} = WeatherSlice.actions;
export default WeatherSlice.reducer;
