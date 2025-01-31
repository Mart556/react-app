import './ExpensesDate.css';

const ExpenseDate = ({ date }) => {
    const month = new Date(date).toLocaleString('en-US', { month: 'long' });
    const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
    const year = new Date(date).getFullYear();

    return (
        <div className="expense-date">
            <div className="expenses-date__month">{month}</div>
            <div className='expenses-date__day'>{day}</div>
            <div className='expenses-date__year'>{year}</div>
        </div>
    );
};

export default ExpenseDate;