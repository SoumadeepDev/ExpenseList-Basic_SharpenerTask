import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
import { EXPENSE_DATA } from "./data";
function App() {
  const [expenses, setExpenses] = useState(EXPENSE_DATA);
  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          item={expense.item}
          location={expense.LocationOfExpenditure}
          price={expense.price}
        />
      ))}
    </div>
  );
}

export default App;
