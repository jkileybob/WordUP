import React from 'react'
import WordCard from '../components/WordCard.js'

// props: wordsList           ={this.state.filterWords}
class WordCardContainer extends React.Component{
  render(){
    // console.log(this.props.wordsList)
    return(
      <div className= "word-card-container">
      {this.props.wordsList.map(word=>{
        return <WordCard
                  key={word.word}
                  word={word}
                />
      })}
      </div>
    )
  }
}

export default WordCardContainer
