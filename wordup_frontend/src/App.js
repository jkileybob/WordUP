import React from 'react';
import Navbar from '../src/components/Navbar'
import SearchBar from '../src/components/SearchBar'
import WordCardContainer from '../src/containers/WordCardContainer'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      allWords: [],
      searchTerm: "",
      currentCard: null
    }

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

  // currentCard: this.getRandom(currentCard)
  // getRandom = (currentCard) => {
  //   let card = currentCard[Math.floor(Math.random() * currentCard.length)]
  //   return card
  // }


  changeSearchTerm = (e) => {
    // console.log(e.currentTarget.value)
    let inputText = e.currentTarget.value
    this.setState({
      searchTerm: inputText,
      currentCard: inputText
    })
  }


  render(){

    let filterWords = this.state.allWords.filter(word =>
      word.word.includes(this.state.searchTerm)
    )

    return(

      <div className="App">
              <Navbar
                title="WordUP!"
               />
              <SearchBar
                textState={this.state.searchTerm}
                changeSearchTerm={this.changeSearchTerm}
              />

            {this.state.currentCard ?
          <div className= 'container-div'>
              <WordCardContainer
                wordsList={filterWords}
                currentcard={this.state.currentCard}
              />
          </div> : null}
      </div>

    )}
}

export default App;
