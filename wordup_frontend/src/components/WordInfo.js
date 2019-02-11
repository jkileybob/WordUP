import React from 'react'

const WordInfo = (props) => {
  // console.log(props)
  return(
    <div className="word-info"
         id={`${props.word.word}-info-id`}
         hidden={props.hidden}
         currentcard={props.currentcard}
         >

        <h3>{props.word.phonetic}</h3>
        <p
          id={props.word.word}
          >{props.word.meaning}</p>

    </div>
  )
}


export default WordInfo;

//hidden={this.state.isHidden}
