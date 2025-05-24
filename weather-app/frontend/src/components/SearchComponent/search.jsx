import React, { useState } from "react";
import styles from "./search.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const fetchWeatherData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/search?city=${city}`);
      const data = await response.json();
      onSearch(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <form
          onSubmit={fetchWeatherData}
          className="form-inline"
          action="http://127.0.0.1:5000/search"
          method="get"
        >
          <input
            className={styles.searchBar}
            id="city"
            name="city"
            type="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="New York, Florida, Atlanta, etc..."
            aria-label="Search"
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch />
          </button>
        </form>
      </nav>
    </>
  );
}

export default SearchBar;
