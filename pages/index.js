import Link from 'next/link'
import Header from '../components/header'
import { useCount, useDispatchCount } from '../components/Counter'

export async function getStaticProps(context) {
  // const state = useCount()
  const res = await fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/50`); // do something with the action
  const quotes = await res.json()
  const votesArr = quotes.length > 0 ? new Array(quotes.length).fill(0) : [0];
  return {
    props: {
      quotes, votesArr, quoteQty: 0,
      voteQty: 0,
      loading: true
    },
  }
}
const ListCard = (props) => {
  
  return ( 
    <li>
      <button onClick={() => handleIncrease(props.index)}>+</button>
      {props.votes}
      <button onClick={() => handleDecrease(props.index)}>-</button>
      <em>{props.quote}</em>
    </li>
  )
}
const List = (props) => {
  const Quotes = props.Quotes;
  const listQuotes = Quotes.map((quote, index) => {
    return (
      <ListCard 
        quote = {quote} 
        key = {index}  
        votes = {props.votes[index]}
        handleDecrease = {() => handleDecrease()}
        handleIncrease = {() => handleIncrease()}
      />
    )
    
  })
  return (
    <ul className="QuoteList mx-4 my-2 text-base">{listQuotes}</ul>
  )
}

const IndexPage = (props) => {
  const dispatch = useDispatchCount()
  const state = useCount()
  const handleIncrease = (value) =>
    dispatch({
      type: 'INCREASE',
      payload: value
    })
  const handleDecrease = (value) =>
    dispatch({
      type: 'DECREASE',
      payload: value
    })
  const updateQuotes = (event) => 
    dispatch({
      type: "UPDATE_QUOTES",
    });
  return (
    <>
      <Header 
        VoteQty = {props.voteQty} 
        QuoteCount = {props.quoteQty}
        updateQuotesArr = {() => updateQuotes()}
      />
      <List 
        Quotes = {props.quotes} 
        votes = {props.votesArr}
        handleIncrease = {() => handleIncrease()}
        handleDecrease = {() => handleDecrease()}
      />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  )
}

export default IndexPage
