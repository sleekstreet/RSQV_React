import Link from 'next/link'
import Header from '../components/header'
import react, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useCount, useDispatchCount } from '../components/Counter'

export async function getStaticProps(context) {
  // const state = useCount()
  const res = await fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/50`); // do something with the action
  const quotes = await res.json()

  return {
    props: {
      quotes
    }
  }
}
const ListCard = (props) => {
  // console.log(props.index)
  return ( 
    <li>
      <button onClick={() => props.handleIncrease(props.index)}><FontAwesomeIcon icon={"fa-thumbs-up"} /></button>
      <span>{props.votes}</span>
      <button onClick={() => props.handleDecrease(props.index)}><FontAwesomeIcon icon={"fa-thumbs-down"} /></button>
      <q><em>{props.quote}</em></q>
    </li>
  )
}
const List = (props) => {
  const Quotes = props.Quotes;
  const handleIncrease = (index) => {
    props.handleIncrease(index)
  }
  const listQuotes = Quotes.map((quote, index) => {
    return (
      <ListCard 
        quote = {quote} 
        key = {index}  
        index = {index}
        votes = {props.votes[index]}
        handleDecrease = {(index) => props.handleDecrease(index)}
        handleIncrease = {(index) => handleIncrease(index)}
      />
    )
    
  })
  return (
    <ul className="QuoteList mx-4 my-2 text-xs text-gray-400">{listQuotes}</ul>
  )
}

export default function IndexPage(props){
  const [quoteQty, setQuoteQty] = useState(0);
  const [voteQty, setVoteQty] = useState(0)
  const [votesArr, setVotesArr] = useState(props.quotes.length > 0 ? new Array(props.quotes.length).fill(0) : [0]);

  // useEffect(() => {
    
  // })
  const dispatch = useDispatchCount()
  const state = useCount()
  function handleIncrease(index){
    setVoteQty(voteQty + 1)
    console.log(`quote space: ${index} old amount ${votesArr[index]} typeof ${typeof votesArr[index]}`)
    votesArr[index]=votesArr[index]+1
    console.log(`new array ${votesArr}`)
    setVotesArr(votesArr)
  }
  function handleDecrease(index){
    setVoteQty(voteQty + 1)
    votesArr[index]=votesArr[index]-1
    setVotesArr(votesArr)
  }
  const updateQuotes = (event) => 
    dispatch({
      type: "UPDATE_QUOTES",
    });
  return (
    <>
      <Header 
        VoteQty = {voteQty} 
        QuoteCount = {quoteQty}
        updateQuotesArr = {() => updateQuotes()}
      />
      <List 
        Quotes = {props.quotes} 
        votes = {votesArr}
        handleIncrease = {(index) => handleIncrease(index)}
        handleDecrease = {(index) => handleDecrease(index)}
      />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  )
}


