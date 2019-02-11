import React from 'react'

// props: word          ={word}
//        isHidden      ={props.isHidden}
//        currentCard   ={props.currentCard}
const WordCard = (props) => {
  console.log(props)
  return(
    <div className= 'card-container'>
      <div className="card"
           currentCard={props.currentCard}
           isHidden={props.isHidden}
        >

        <div className="front"
          onClick={props.callback}

          >
          <div className="word-info">
              <h1>{props.word.word}</h1>
              <h3>{props.word.phonetic}</h3>
              <p>{props.word.meaning}</p>
          </div>
        </div>

        <div className="back">
          <div className={props.word.word}>

          </div>
        </div>

      </div>
    </div>
  )
}
export default WordCard
