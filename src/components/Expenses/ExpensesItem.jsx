import "./ExpensesItem.css";
import ExpenseDate from "./ExpensesDate";
import { useState } from "react";

const ExpensesItem = (props) => {
const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Clicked");
    setTitle(`Updated by click ${title}`);
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}€</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </div>
  );
};

export default ExpensesItem;
