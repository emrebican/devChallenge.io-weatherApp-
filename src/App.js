import { useEffect } from "react";
import { getCoordinates, getWeather } from "./features/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import SideBar from './pages/SideBar/SideBar';
import MainContent from './pages/MainContent/MainContent';
import SearchBar from "./pages/SearchBar/SearchBar";

function App() {
  const dispatch = useDispatch();
  const coordinates = useSelector(state => state.weather.coordinates);
  const weatherData = useSelector(state => state.weather.weatherData);

  console.log(coordinates);
  console.log(weatherData);

  let city = "Istanbul";
  let lat = coordinates?.lat;
  let lon = coordinates?.lon;

  useEffect(() => {
    dispatch(getCoordinates(city)).then(() => {
      dispatch(getWeather(lat, lon));
    })
  }, [])

  return (
    <div className="layout">
      <Routes>
        <Route exact path="/" element={<SideBar />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
      <MainContent />
    </div>
  );
}

export default App;
