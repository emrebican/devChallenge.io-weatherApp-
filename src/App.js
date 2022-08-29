import { useSelector } from "react-redux";

import SideBar from './pages/SideBar/SideBar';
import MainContent from './pages/MainContent/MainContent';
import SearchBar from "./pages/SearchBar/SearchBar";

function App() {
  const weatherData = useSelector(state => state.weather.weatherData);
  const coordinates = useSelector(state => state.weather.coordinates);
  console.log(weatherData);
  console.log(coordinates);

  return (
    <div className="layout">
      <SideBar />
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;
