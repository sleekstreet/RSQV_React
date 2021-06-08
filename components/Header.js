
export default function header({ VoteQty, QuoteCount, updateQuotesArr }) {
  
  return (
    <div className="flex w-full justify-between py-1 px-4 border border-gray-800">
      <h1>Ron Swanson Quote Voter</h1>
      <div>Quantity
        <select onChange={ () => updateQuotesArr() } value={QuoteCount}>
          <option value="1">1 quote</option>
          <option value="5">5 quotes</option>
          <option value="10">10 quotes</option>
        </select>
      </div>
      <div>Total votes:{VoteQty}</div>
    </div>
  )
}