import { use } from 'react';
import './App.css'

import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpenses/NewExpense.jsx'

import { useState, useEffect } from 'react'

function App() {
  const getRandomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2025, 11, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };


  const DUMMY_EXPENSES = [

  ]

  const [expenses, setExpenses] = useState(() => {
    const localData = localStorage.getItem('expenses')
    return localData ? JSON.parse(localData) : DUMMY_EXPENSES
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])


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
