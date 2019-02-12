import React from 'react';
import {debounce} from 'lodash';
import Navbar from '../src/components/NavBar/Navbar'
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

  getRandom = (e) => {
    fetch('http://localhost:4000/api/v1/words')
    .then(response => response.json())
    .then(words => {
      let random = words[Math.floor(Math.random()*words.length)];
      console.log(random.word)
      this.setState({
        searchTerm: random.word,
        currentCard: random
      })
    })
  }

  changeSearchTerm = (e) => {
    e.persist();
    // debounce((e) => {
      // console.log(e.currentTarget.value)
      let inputText = e.currentTarget.value
      this.setState({
        searchTerm: inputText,
        currentCard: inputText
      })
  // }, 2000)
  }

  // filterWords = () => {
  //   return this.state.allWords.filter(word =>
  //     word.word.includes(this.state.searchTerm))
  // }

  filterWords = () => {
    let wordArray = [];

    while (wordArray.length < 3) {
      this.state.allWords.filter(word =>
      word.word.includes(this.state.searchTerm).push(wordArray))
      console.log(wordArray)
    }

  }


  // return  debounce(() => {
  //     return
  //     this.state.allWords.filter(word =>
  //       word.word.includes(this.state.searchTerm))
  //     }, 2000, {"leading": false})
  // }

  render(){

    // let filterWords = this.state.allWords.filter(word =>
    //   word.word.includes(this.state.searchTerm))

    return(

      <div className="App">
              <Navbar
                link={"https://www.youtube.com/watch?v=MZjAantupsA"}
               />
              <SearchBar
                textState={this.state.searchTerm}
                changeSearchTerm={this.changeSearchTerm}
                random={this.getRandom}
              />

            {this.state.currentCard ?
          <div className= 'container-div'>
              <WordCardContainer
                wordsList={this.filterWords()}
                currentcard={this.state.currentCard}
              />
          </div> : null}
      </div>

    )}
}

export default App;
