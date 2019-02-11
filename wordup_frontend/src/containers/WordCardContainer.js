import React from 'react'
import WordCard from '../components/WordCard.js'

// props: wordsList           ={this.state.filterWords}
     // currentCard           ={this.state.currentCard}
class WordCardContainer extends React.Component{

  state={
    isHidden: true
  }

  toggleHidden = (e) => {
    // debugger
    console.log(e);
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    // console.log(this.props.wordsList)
    return(
      <div className= "word-card-container">
      {this.props.wordsList.map(word=>{
        return <WordCard
                  key={word.word}
                  word={word}
                  isHidden={this.state.isHidden}
                  callback={this.toggleHidden}
                  currentCard={this.state.currentCard}
                />
      })}
      </div>
    )
  }
}

export default WordCardContainer
