import React from 'react'
import WordInfo from '/Users/jkileybob/Mod-4-Final-Project/wordup_frontend/src/components/WordInfo.js'


// props: word          ={word}
//        currentCard   ={props.currentCard}
class WordCard extends React.Component{


      state=({
        isHidden: true,

      })

      showCard = (e) => {
        // console.log(e.currentTarget.id)
        this.setState({
          isHidden: false
        })
      }

  render(){
    // console.log(this.props)
    return(
      <div className= {`${this.props.word.word}-card-container`}>
        <div className="card"
             id={`${this.props.word.word}`}
             currentcard={this.props.currentcard}
             onClick={this.showCard} >

              <h1 id={`${this.props.word.word}-header`} >
                {this.props.word.word}
              </h1>

        {!this.state.isHidden ?
              <WordInfo
                key={`${this.props.word.word}-info`}
                word={this.props.word}
                hidden={this.state.hidden}
                currentcard={this.props.currentcard} /> : null}
        </div>
      </div>
    )
  }
}
export default WordCard
