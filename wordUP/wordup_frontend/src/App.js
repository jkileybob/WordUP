import React from 'react';
import Navbar from '../src/components/Navbar'
import SearchBar from '../src/components/SearchBar'
import WordCardContainer from '../src/containers/WordCardContainer'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      allWords: [],
      searchTerm: ""
    }
    // this.onSearchHandler = this.onSearchHandler.bind(this)
    // debugger
  }


  componentDidMount(){
    fetch('http://localhost:4000/api/v1/words')
    .then(response => response.json())
    .then(words => {
      // console.log(words)
      this.setState({
          allWords: words
      })
    })
  }


  changeSearchTerm = (e) => {
    console.log(e.currentTarget.value)
    let inputText = e.currentTarget.value
    //we want to change searchTerm
    this.setState({
      searchTerm: inputText
    })
  }



  render(){

    let filterWords = this.state.allWords.filter(word =>
      word.word.includes(this.state.searchTerm)
    )
    return(

      <div>
        <Navbar />
        <SearchBar
        textState={this.state.searchTerm}
        changeSearchTerm={this.changeSearchTerm}
        />
        <WordCardContainer
          wordsList={filterWords}
        />
      </div>

    )}
}

export default App;
