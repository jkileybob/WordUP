import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
    <input
      type="text"
      value={props.textState}
      onChange={props.changeSearchTerm}/>
    </div>
  )
}

export default SearchBar
