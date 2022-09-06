import SideBar from './pages/SideBar/SideBar';
import MainContent from './pages/MainContent/MainContent';
import SearchBar from "./pages/SearchBar/SearchBar";

function App() {

  return (
    <div className="layout">
      <SideBar />
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;
