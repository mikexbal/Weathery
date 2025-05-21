import React from "react";
import styles from "./search.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <form
          class="form-inline"
          action="http://127.0.0.1:5000/search"
          method="get"
        >
          <input
            className={styles.searchBar}
            id="city"
            name="city"
            type="search"
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
