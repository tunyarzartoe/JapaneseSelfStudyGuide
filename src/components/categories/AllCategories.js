import React, { useState } from "react";
import categories from '../../dummy/categories.json'; 

const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="categories-wrapper">
      <div className="categories-container container">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
