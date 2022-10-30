import React from 'react';

export function SearchCard({recipe}) {
  return(
    <div className="recipe-preview">
      <img className="search-img" alt={recipe.id} src={recipe.image} />
      <div>
        <h2>{recipe.title}</h2>
      </div>
    </div>
  );
}

