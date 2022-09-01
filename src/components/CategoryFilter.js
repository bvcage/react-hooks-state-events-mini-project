import React from "react";

function CategoryFilter({ categories, selection, onSelection }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button
            key={category}
            value={category}
            className={(category === selection) ? 'selected' : ''}
            onClick={onSelection}
            >{category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
