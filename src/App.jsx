import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import categories from "./components/Categories";
import NavTab from "./components/NavTab";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("animation");
  // const [query, setQuery] = useState("");
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
  const handleSearch = () => {
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
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </ul>

      {/* Search Bar */}
      <SearchBar />

      {/* Movies Grid */}
      <div className="row">
        {filteredMovies.map((movie) => (
          <div className="col-md-4 col-lg-3 mb-4" key={movie.id}>
            <div className="card h-100">
              <img
                src={
                  movie.posterURL ||
                  "https://c8.alamy.com/comp/2ACA4KA/black-film-shadow-2ACA4KA.jpg"
                }
                className="card-img-top"
                alt={movie.posterURL}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.plot
                    ? movie.plot.slice(0, 100) + "..."
                    : "No description available."}
                </p>
                <a
                  href={"https://www.google.com/search?q=" + movie.imdbId}
                  target="_blank"
                >
                  <small className="text-muted">imdbId : {movie.imdbId}</small>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
