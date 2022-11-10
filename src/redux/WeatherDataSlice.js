import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'WeatherDataList/getData',
  async city => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0cefb33721mshd56eeff59af5d4bp150fafjsn8f12d10b38c7',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
      options,
    );
    try {
      const data = response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const WeatherDataSlice = createSlice({
  name: 'WeatherDataList',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.list = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default WeatherDataSlice.reducer;
