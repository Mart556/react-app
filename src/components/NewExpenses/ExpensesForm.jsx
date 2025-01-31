import './ExpensesForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const setEnteredTitle = (enteredTitle) => {
        setUserInput({
            ...userInput,
            enteredTitle: enteredTitle
        });
    }

    const setEnteredAmount = (enteredAmount) => {
        setUserInput({
            ...userInput,
            enteredAmount: enteredAmount
        });
    }

    const setEnteredDate = (enteredDate) => {
        setUserInput({
            ...userInput,
            enteredDate: enteredDate
        });
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            price: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpensesData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        setFormOpened(false);
    }

    const [formOpened, setFormOpened] = useState(false);

    const openForm = () => {
        setFormOpened(true);
    }

    const cancelForm = () => {
        setFormOpened(false);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (

    <>
    {formOpened ? (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2025-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button onClick={cancelForm}>Cancel</button>
            </div>
        </form>
    ) : 
        <>
        <button onClick={openForm}>Add New Expense</button>
        </>
    }
    </>


    
    );
};

export default ExpenseForm;