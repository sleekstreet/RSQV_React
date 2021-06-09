import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function ListCard({quote, index, votes, handleDecrease, handleIncrease }){
  // console.log(props.index)
  return ( 
    <li>
      <button onClick={() => handleIncrease(index)}><FontAwesomeIcon icon={faThumbsUp} /></button>
      <span>{votes}</span>
      <button onClick={() => handleDecrease(index)}><FontAwesomeIcon icon={faThumbsDown} /></button>
      <q><em>{quote}</em></q>
    </li>
  )
}