import {createSlice} from '@reduxjs/toolkit';
import  DataList  from '../assets/data';

const initialState = DataList;

export const favouriteSlice = createSlice({
  name: 'favouriteList',
  initialState: {
    favList: initialState,
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

export const {getUserData} = favouriteSlice.actions;
export default favouriteSlice.reducer;
