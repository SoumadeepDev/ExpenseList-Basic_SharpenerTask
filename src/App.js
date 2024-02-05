import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
import { EXPENSE_DATA } from "./data";
import card from "./components/card";
function App() {
  const [expenses, setExpenses] = useState(EXPENSE_DATA);

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          title={expense.title}
          location={expense.LocationOfExpenditure}
          price={expense.price}
          onDelete={handleDeleteExpense}
        />
      ))}
    </div>
  );
}

export default App;
