import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "./Card";
function ExpenseItem(props) {
  const expenseDescription = props.title;
  const expensePrice = props.amount;
  const [ previous , updatedvalue]= useState(props.title);
  const clickarrowfunction = () => {
    updatedvalue('East or west Akash is Best');
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{previous}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
      <button onClick={clickarrowfunction}> click me </button>
    </Card>
  );
}
export default ExpenseItem;
