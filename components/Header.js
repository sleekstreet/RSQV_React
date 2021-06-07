import { useCount, useDispatchCount } from '../components/Counter'

export default function header() {
  const state = useCount()
  return (
    <div className="flex w-full justify-between">
      <h1>Ron Swanson Quote Voter</h1>
      <div>Total votes:{state.quantity}</div>
    </div>
  )
}