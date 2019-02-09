import React from 'react'

// props:  searchWords     ={this.state}
//         searchCallBack    ={this.state.onSearchHandler}
const SearchBar = (props) => {
  return (
    <input
      type="text"
      value={props.textState}
      onChange={props.changeSearchTerm}/>
  )
}

export default SearchBar
