import React, { useCallback } from "react";

interface CategoryDropdownProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(e.target.value);
    },
    [setSelectedCategory]
  );

  return (
    <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="bg-white border-b-2 border-gray-300 rounded-none px-4 py-2 ml-4 w-96 mb-4 mt-4"
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

export default React.memo(CategoryDropdown);
