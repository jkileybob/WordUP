import React from 'react'

const WordInfo = (props) => {
  // console.log(props)
  return(

    <div className="word-info" id={`${props.word.word}-info-id`} >

        <h3>{props.word.phonetic}</h3>
        <p>{props.word.meaning}</p>

    </div>
  )
}


export default WordInfo;
