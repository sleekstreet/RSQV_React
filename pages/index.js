import Link from 'next/link'
import Header from '../components/header'
import List from '../components/list'
import { useEffect, useState } from 'react'


export default function IndexPage(){
  // console.log(`Incomming Props: ${props.quotes}`)
  const [quoteArr, setQuoteArr] = useState([])
  const [quoteQty, setQuoteQty] = useState(50)
  const [voteQty, setVoteQty] = useState(0)
  const [light, setLight] = useState(false)
  const [loading, setLoading] =useState(true)
  const [votesArr, setVotesArr] = useState(quoteQty > 0 ? new Array(quoteQty).fill(0) : [0])


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
  function updateQuotes(count){
    setQuoteQty(count)
    setLoading(true)
  }
  
  useEffect(() => {
   
    fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${quoteQty}`)
      .then((res) => res.json())
      .then((data) => {
        setQuoteArr(data)
        setLoading(false)
      }); 
    
  }, [quoteQty])

  if(loading) return <p>Loading...</p>
  if(quoteArr.length < 1) return <p>No data is currently provided</p>

  return (
    <>
      <div className={`${light ? 'dark' : ''}`}>
        <Header 
          VoteQty = {voteQty} 
          QuoteCount = {quoteQty}
          light = {light}
          updateQuotesCount = {(count) => updateQuotes(count)}
          toggleMode = {() => toggleMode()}
        />
        <List 
          Quotes = {quoteArr} 
          votes = {votesArr}
          QuoteCount = {quoteQty}
          handleIncrease = {(index) => handleIncrease(index)}
          handleDecrease = {(index) => handleDecrease(index)}
        />
      </div>
    </>
  )
}


