import './App.css'
import ExpensesItem from './components/Expenses/ExpensesItem.jsx'
import './components/Expenses.css'
import Card from './components/UI/Card.jsx'

function App() {
  const getRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const Expenses = [
    { id: 1, title: 'Ese #1', date: getRandomDate(), price: 100 },
    { id: 2, title: 'Ese #2', date: getRandomDate(), price: 200 }
  ]

  return (
    <Card className="expenses">
      {Expenses.map(expense => (
        <ExpensesItem 
          key={expense.id} 
          title={expense.title} 
          date={expense.date} 
          price={expense.price} 
        />
      ))}
    </Card>
  )
}

export default App
