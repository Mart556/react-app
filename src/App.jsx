import './App.css'

import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpenses/NewExpense.jsx'

import { useState } from 'react'

function App() {
  const getRandomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2025, 11, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const DUMMY_EXPENSES = [
    { id: 1, title: 'Ese #1', date: getRandomDate(), price: 100 },
    { id: 2, title: 'Ese #2', date: getRandomDate(), price: 200 }
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
