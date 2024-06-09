import React from "react";

const CategoryDropdown = ({ selectedCategory, setSelectedCategory, categories }) => {
  const handleCategoryChange = ((e) => {
    setSelectedCategory(e.target.value);
  }, [setSelectedCategory]);

  return (
    <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="bg-white border-b-2 border-gray-300 rounded-none px-4 py-2 ml-4 w-96"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
