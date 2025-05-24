import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchComponent/Search";
import WeatherDisplay from "./components/WeatherComponent/Display";

function App() {
  const [data, setData] = useState(null);

  const handleSearch = (json) => {
    setData(json);
  };

  return (
    <>
      <div id="container">
        <h1 id="heading">Enter location</h1>
        <SearchBar onSearch={setData} />
        <WeatherDisplay data={data} />
      </div>
    </>
  );
}

export default App;
