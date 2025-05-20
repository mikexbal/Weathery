import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1 id="heading">Enter location</h1>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
