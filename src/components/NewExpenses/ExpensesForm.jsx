import './ExpensesForm.css';
import { Fragment, useRef, useState } from 'react';

import Error from '../UI/Error';

const ExpenseForm = (props) => {
    const [error, setError] = useState();

    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        event.preventDefault();

        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title, amount and date.'
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpensesData(expenseData);

        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';

        setFormOpened(false);
    }

    const [formOpened, setFormOpened] = useState(false);

    const openForm = () => {
        setFormOpened(true);
    }

    const cancelForm = () => {
        setFormOpened(false);
    }

    return (

    <Fragment>
        {
            error && <Error title={error.title} message={error.message} onConfirm={() => setError(null)} />
        }
    {formOpened ? (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' id="title" ref={titleInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' id='amount' ref={amountInputRef} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2025-12-31' id='date' ref={dateInputRef}/>
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
    </Fragment>


    
    );
};

export default ExpenseForm;