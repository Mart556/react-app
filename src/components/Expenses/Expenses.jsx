import Card from "../UI/Card"
import ExpensesItem from "./ExpensesItem"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"

import { useState } from 'react'

const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('2023');

    const filterChangeHandler = (event) => {
        setFilterYear(event.target.value);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <>

        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 && <p style={{ color: 'white' }}>No expenses found.</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map(expense => (
            <ExpensesItem 
            key={expense.id} 
            title={expense.title} 
            date={expense.date} 
            price={expense.price} 
            />
        ))}
        </Card>
        </>
    )
}

export default Expenses