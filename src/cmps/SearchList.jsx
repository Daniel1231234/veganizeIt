import React from 'react';
import {SearchCard} from './SearchCard';

export function SearchList({ filteredrecipes }) {
 
  const filtered = filteredrecipes.map(r =>  <SearchCard key={r.id} recipe={r} />); 
  return (
    <div className='recipe-list simple-cards-grid container'>
      {filtered}
    </div>
  );
}

