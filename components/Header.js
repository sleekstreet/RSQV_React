import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
export default function Header({ VoteQty, QuoteCount, updateQuotesCount, light, toggleMode }) {
  
  return (
    <div className="flex w-full justify-between py-3 px-4 border text-gray-800 border-gray-800 dark:text-gray-300 dark:border-gray-200">
      <h1>Ron Swanson Quote Voter</h1>
      <div>Quantity
        <select onChange={ (e) => updateQuotesCount(e.target.value) } value={QuoteCount}>
          <option value="1">1 quote</option>
          <option value="5">5 quotes</option>
          <option value="10">10 quotes</option>
          <option value="25">25 quotes</option>
          <option value="50">50 quotes</option>
        </select>
      </div>
      <div><button onClick={() => toggleMode()}><FontAwesomeIcon icon={light ? faToggleOn : faToggleOff} /> </button><span className="totalVotes">Total Votes: {VoteQty}</span></div>
    </div>
  )
}