function ExpenseItem(props) {
  return (
    <div className="ExpenseList">
      <h2>{props.item}</h2>
      <h2>Rs.{props.price}</h2>
    </div>
  );
}

export default ExpenseItem;
