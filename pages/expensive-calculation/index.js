import Head from 'next/head'
import expensiveCalculation from '../../common'

export default function Home() {
  return (
    <div className="container">
      <h3>The result is: {expensiveCalculation()}</h3>
    </div>
  )
}
