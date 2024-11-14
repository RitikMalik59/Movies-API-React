import React from "react";

const NavTab = ({ category, selectedCategory, setSelectedCategory }) => {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${selectedCategory === category ? "active" : ""}`}
        onClick={() => {
          setSelectedCategory(category);
          //   setQuery(""); // Reset search when category changes
        }}
      >
        {category.replace("-", " ")}
      </button>
    </li>
  );
};

export default NavTab;
