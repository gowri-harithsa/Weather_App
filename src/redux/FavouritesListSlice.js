import {createSlice} from '@reduxjs/toolkit';
import {DataList}   from '../assets/data';
import { RecentDataList } from '../assets/data';

const FavouriteinitialState = DataList;
const RecentInitialState = RecentDataList;

export const WeatherSlice = createSlice({
  name: 'favouriteList',
  initialState: {
    favList: FavouriteinitialState,
    RecentList: RecentInitialState,
  },
  reducers: {
    // getUserData: (state, action) => {
    //   state.value = state.allValues.filter(item => {
    //     return item.userId == action.payload;
    //   });
    //   state.filterValue = state.value;
    // },
  },
});

export const {getUserData} = WeatherSlice.actions;
export default WeatherSlice.reducer;
