import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import categories from "./components/Categories";
import NavTab from "./components/NavTab";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("animation");
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Fetch movies from the selected category
  useEffect(() => {
    fetch(`https://api.sampleapis.com/movies/${selectedCategory}`)
      .then((response) => {
        // console.log(response);
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setMovies(data);
          setFilteredMovies(data);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [selectedCategory]);

  // Filter movies based on search query
  const handleSearch = (query) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Search by Category</h1>

      {/* Category Tabs */}
      <ul className="nav nav-tabs mb-4">
        {categories.map((category, index) => (
          <NavTab
            key={index}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </ul>

      {/* Search Bar */}
      <SearchBar handleSearch={handleSearch} />

      {/* Movies Grid */}
      <div className="row">
        {filteredMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
