import { useEffect } from "react";
import { getCoordinates, getWeather } from "./features/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

import SideBar from './pages/SideBar/SideBar';
import MainContent from './pages/MainContent/MainContent';

function App() {
  const dispatch = useDispatch();
  const coordinates = useSelector(state => state.weather.coordinates);
  const weatherData = useSelector(state => state.weather.weatherData);

  console.log(coordinates);
  console.log(weatherData);

  let city = "berlin";

  useEffect(() => {
    dispatch(getCoordinates(city));
    dispatch(getWeather());
  }, [])



  return (
    <div className="layout">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
