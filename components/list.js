import ListCard from '../components/listCard'
export default function List({ Quotes, votes, handleIncrease, handleDecrease }){

  // const handleIncrease = (index) => {
  //   props.handleIncrease(index)
  // }
  // const listQuotes = (Quotes, Count) => {
  //   let QuoteBuildArr = []
  //   for(let i=0; i<= Count; i++){
  //     QuoteBuildArr.push(<ListCard 
  //       quote = {Quotes[i]} 
  //       key = {i}  
  //       index = {i}
  //       votes = {props.votes[i]}
  //       handleDecrease = {(i) => props.handleDecrease(i)}
  //       handleIncrease = {(i) => handleIncrease(i)}
  //     />)
  //   }
  //   console.log(QuoteBuildArr)
  //   return QuoteBuildArr
  // }
  const listQuotes = Quotes.map((quote, index) => {
    return (
      <ListCard 
        quote = {quote} 
        key = {index}  
        index = {index}
        votes = {votes[index]}
        handleDecrease = {(index) => handleDecrease(index)}
        handleIncrease = {(index) => handleIncrease(index)}
      />
    )
    
  })
  return (
    <ul className="QuoteList mx-4 my-2 text-xs text-gray-400">{listQuotes}</ul>
  )
}