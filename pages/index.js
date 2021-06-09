import Link from 'next/link'
import Header from '../components/header'
import List from '../components/list'
import react, { useState } from 'react'
// import { useCount, useDispatchCount } from '../components/Counter'

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

export default function IndexPage(props){
  const [quoteQty, setQuoteQty] = useState(10);
  const [voteQty, setVoteQty] = useState(0)
  const [light, setLight] = useState(true)
  const [votesArr, setVotesArr] = useState(props.quotes.length > 0 ? new Array(props.quotes.length).fill(0) : [0]);

  // const dispatch = useDispatchCount()
  // const state = useCount()
  function handleIncrease(index){
    setVoteQty(voteQty + 1)
    votesArr[index]=votesArr[index]+1
    setVotesArr(votesArr)
  }
  function handleDecrease(index){
    setVoteQty(voteQty + 1)
    votesArr[index]=votesArr[index]-1
    setVotesArr(votesArr)
  }
  function toggleMode(){
    setLight(!light)
  }
  function updateQuotes(event){}
    
  return (
    <>
      <div className={`${light ? 'dark' : ''}`}>
      <Header 
        VoteQty = {voteQty} 
        QuoteCount = {quoteQty}
        light = {light}
        updateQuotesArr = {() => updateQuotes()}
        toggleMode = {() => toggleMode()}
      />
      <List 
        Quotes = {props.quotes} 
        votes = {votesArr}
        QuoteCount = {quoteQty}
        handleIncrease = {(index) => handleIncrease(index)}
        handleDecrease = {(index) => handleDecrease(index)}
      />
      
      </div>
    </>
  )
}


