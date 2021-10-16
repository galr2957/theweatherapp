import React from 'react';

const SearchForm = ({ onSearch }) => {
  

  const onSearchFieldChange = (event) => {
    onSearch(event.target.value);
  }

  return (
     <div className="w-100">
        <label for="name" className="f6 b db mb2">search for your favorite city</label>
        <input  id="name" 
                className="input-reset ba b--black-20 pa2 mb2 w5" 
                type="text" 
                aria-describedby="name-desc" 
                onChange={onSearchFieldChange}/>
    </div>
  );
}

export default SearchForm;