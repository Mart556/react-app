import ExpenseForm from "./ExpensesForm.jsx";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpensesDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpensesData={onSaveExpensesDataHandler} />
        </div>
    );
};

export default NewExpense;