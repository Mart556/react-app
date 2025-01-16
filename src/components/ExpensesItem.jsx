import React from "react";
import "./ExpensesItem.css";

const ExpensesItem = (props) => {
  return (
    <div className="expense-item">
      <h2>{props.date}</h2>
      <hr />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}$</div>
      </div>
    </div>
  );
};

export default ExpensesItem;
