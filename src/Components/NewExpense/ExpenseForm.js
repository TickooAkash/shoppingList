import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //useState();
  const [sourcetitle, targettitle] = useState("");
  const [sourceamount, targetamount] = useState("");
  const [sourceDate, targetDate] = useState("");

  // const [userInput,  setUserInput] =useState({
  //   sourcetitle: '',
  //   sourceamount: '',
  //   sourceDate: ''
  // });

  const titleChangeHandler = (event) => {
    targettitle(event.target.value);
    // setUserInput((prevState)=>{
    //   return { ...prevState , sourcetitle : event.target.value};
    // });
    // setUserInput({
    //   ...userInput,
    //   sourcetitle : event.target.value});
  };
  const amountChangeHandler = (event) => {
    targetamount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   sourceamount : event.target.value});
    // setUserInput((prevState)=>{
    //   return { ...prevState , sourceamount : event.target.value};
    // });
  };
  const DateChangeHandler = (event) => {
    targetDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   sourceDate : event.target.value});
    // setUserInput((prevState)=>{
    //   return { ...prevState , sourceDate : event.target.value};
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const values = {
      title : sourcetitle,
      amount :sourceamount,
      date : new Date(sourceDate) 
    };
    
    props.onSaveExpenseData(values);
    targettitle('');
    targetamount('');
    targetDate('');
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={sourcetitle} onChange={titleChangeHandler}></input>
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={sourceamount} 
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              min="2022-02-01"
              max="2023-01-06"
              value={sourceDate} 
              onChange={DateChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
