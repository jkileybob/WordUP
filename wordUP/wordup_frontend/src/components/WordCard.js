import React from 'react'

// props: word       ={word}
const WordCard = (props) => {
  // console.log(props.word)
  return(
    <div>
      <h1>{props.word.word}</h1>
      <h3>{props.word.phonetic}</h3>
      <p>{props.word.meaning}</p>
    </div>
  )
}
export default WordCard
