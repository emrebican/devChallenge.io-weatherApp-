import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as Constant from '../constants/constants';

// InitialState
const initialState = {
    coordinates: [],
    weatherData: [],
    loading: false,
    tempUnits: Constant.TEMPRATURE_UNITS.celcius,
    searchbarVisible: false,
    searchQuery: Constant.DEFAULT_CITY,
    locations: [],
}

// Coordinates
export const getCoordinates = createAsyncThunk(
    "weather/getCoordinates",
    async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&lang=en`);

        return response.data.coord;
    }
)

// WeatherData
export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async ({ lat, lon }) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&exclude=minutely,hourly&lang=en`);

        return response.data;
    }
)

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        tempUnitChange: (state, action) => {
            state.tempUnits = action.payload;
        },
        setVisible: (state, action) => {
            state.searchbarVisible = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        addLocation: (state, action) => {
            state.locations.unshift(action.payload)
        }
    },
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

export const { tempUnitChange, setVisible, setSearchQuery, addLocation } = weatherSlice.actions;
export default weatherSlice.reducer;