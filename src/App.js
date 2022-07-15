import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import "./Components/ExpenseItem";
import Expenses from './Components/Expenses';
import ExpenseItem from "./Components/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES  = [
  {
    id: "e1",
    title: "Selmon boi",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Nana Patekar", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Sharukh Khan",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Amir Khan",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Hi Akash</h2>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
