import React from "react";
import "./ExpensesItem.css";

const ExpensesItem = () => {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Item</h2>
        <div className="expense-item__price">Price</div>
      </div>
    </div>
  );
};

export default ExpensesItem;
