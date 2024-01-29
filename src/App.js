import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseItem item="Food" price="10" />
      <ExpenseItem item="Petrol" price="100" />
      <ExpenseItem item="Movies" price="200" />
    </div>
  );
}

export default App;
