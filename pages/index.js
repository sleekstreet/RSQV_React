import Link from 'next/link'
import Header from '../components/header'
import { useCount, useDispatchCount } from '../components/Counter'

const IndexPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event) =>
    dispatch({
      type: 'DECREASE',
    })

  return (
    <>
      <Header />
      
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  )
}

export default IndexPage
