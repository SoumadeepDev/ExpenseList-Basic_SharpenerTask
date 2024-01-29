import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <h2 className="Location">{`Location: ${props.location}`}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
