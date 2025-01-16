import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensesItem from './components/ExpensesItem'

function App() {
  const [count, setCount] = useState(0)

  const currentDate = new Date().toLocaleDateString()

  return (
    <>
      <ExpensesItem title="Ese #1" date={currentDate} price="100"></ExpensesItem>
      <ExpensesItem title="Ese #2" date={currentDate} price="200"></ExpensesItem>
      <ExpensesItem title="Ese #3" date={currentDate} price="1000"></ExpensesItem>
    </>
  )
}

export default App
