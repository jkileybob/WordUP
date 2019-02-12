import React from 'react'
import App from '/Users/jkileybob/Mod-4-Final-Project/wordup_frontend/src/App.css'

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
    <input
      type="text"
      placeholder="What's the word?"
      value={props.textState}
      onChange={props.changeSearchTerm}/><br></br>
    <button
      onClick={props.random}
      >Roll the Dice</button>
    </div>
  )
}

export default SearchBar
