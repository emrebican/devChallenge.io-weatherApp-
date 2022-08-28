import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// InitialState
const initialState = {
    coordinates: [],
    weatherData: [],
    loading: false,
}

export const getCoordinates = createAsyncThunk(
    "weather/getCoordinates",
    async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&lang=en`);

        return response.data.coord;
    }
)

export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (lat, lon) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=52.5244&lon=13.4105&appid=${process.env.REACT_APP_WEATHER_API}&exclude=minutely,hourly&lang=en`);

        return response.data;
    }
)

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: {
        [getCoordinates.pending]: (state) => {
            state.loading = true;
        },
        [getCoordinates.fulfilled]: (state, action) => {
            state.loading = false;
            state.coordinates = action.payload;
        },
        [getCoordinates.rejected]: (state) => {
            state.loading = false;
        },

        [getWeather.pending]: (state) => {
            state.loading = true;
        },
        [getWeather.fulfilled]: (state, action) => {
            state.loading = false;
            state.weatherData = action.payload;
        },
        [getWeather.rejected]: (state) => {
            state.loading = false;
        }
    }
});

// export const {} = weatherSlice.actions;
export default weatherSlice.reducer;