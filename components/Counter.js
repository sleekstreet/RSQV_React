import { useReducer, useContext, createContext } from 'react'
import useSWR from 'swr'
import axios from 'axios'

const GLOBAL_ACTIONS = {
  UPDATE_QUOTES: 'UPDATE_QUOTES',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  INCREMENT_VOTES: 'INCREMENT_VOTES',
}
const initialState = {
  quotesArr: [],
  votesArr: [],
  quantity: 0,
  loading: true
}
const CounterStateContext = createContext(initialState)
const CounterDispatchContext = createContext()

const reducer = (state, action) => {
  const fetcher = url => axios.get(url).then(res => res.data)
  switch (action.type) {
    case [GLOBAL_ACTIONS.UPDATE_QUOTES]:
        state.quotesArr = useSWR(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${action.payload}`, fetcher); // do something with the action
        if(state.quotesArr.length > 0){
          state.votesArr = new Array(state.quotesArr.length).fill(0);
        }
        return state;
    case [GLOBAL_ACTIONS.INCREASE]:
      return state.votesArr[action.payload] + 1
    case [GLOBAL_ACTIONS.DECREASE]:
      return state.votesArr[action.payload] - 1
    case [GLOBAL_ACTIONS.INCREMENT_VOTES]:
      return state + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useCount = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)
