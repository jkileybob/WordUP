import React from 'react'
import WordCard from '../components/WordCard.js'

// props: wordsList           ={this.state.filterWords}
class WordCardContainer extends React.Component{


  render(){
    // console.log(this.props)
    return(
      <div className= "word-card-container">

      {this.props.wordsList.map(word=>{
        return <WordCard
                  key={`${word.word}-card`}
                  word={word}
                  showCard={this.showCard}
                  currentcard={this.props.currentcard}
                />
      })}

      </div>
    )
  }
}

export default WordCardContainer
