import './App.css'

import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpenses/NewExpense.jsx'

function App() {
  const getRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const Items = [
    { id: 1, title: 'Ese #1', date: getRandomDate(), price: 100 },
    { id: 2, title: 'Ese #2', date: getRandomDate(), price: 200 }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={Items} />
    </div>
  )
}

export default App
