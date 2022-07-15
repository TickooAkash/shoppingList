import './ExpenseDate.css';
function ExpenseDate(props) {
    const expencemonth = props.date.toLocaleString("en-US", { month: "long" });
    const expenseYear = props.date.getFullYear();
    const expenseDate = props.date.toLocaleString("en-US", { day: "2-digit" });
    return (
      <div  className="expense-date">
        <div className="expense-date__month">{expencemonth}</div>
        <div className="expense-date__year">{expenseYear}</div>
        <div className="expense-date__day">{expenseDate}</div>
      </div>
    );
  }
  export default ExpenseDate;
  