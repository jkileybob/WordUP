import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
    <input
      type="text"
      value={props.textState}
      onChange={props.changeSearchTerm} /><br></br>

    <button onClick={props.random}>Roll the Dice</button>

  </div>
  )
}

export default SearchBar

// <button onClick={props.clickSearch}>Search</button>
