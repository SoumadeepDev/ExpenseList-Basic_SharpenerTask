import "./ExpenseItem.css";
import card from "./card";
import ExpenseDate from "./ExpenseDate.js";
import { useState } from "react";

function ExpenseItem(props) {
  const [isEditing, setIsEditing] = useState(false);

  const [price, setPrice] = useState(false);

  const [editedTitle, setEditedTitle] = useState(props.title);

  const [editedPrice, setEditedPrice] = useState(props.price);

  function handleTitleClick() {
    setIsEditing(true);
  }
  function handleSaveTitleClick() {
    setIsEditing(false);
  }
  function handleInputChange(event) {
    setEditedTitle(event.target.value);
  }

  function handlePriceClick() {
    setPrice(true);
  }
  function handleSavePriceClick() {
    setPrice(false);
  }
  function handleInputPriceChange(event) {
    setEditedPrice(event.target.value);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <card className="expense-item expenses">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {!isEditing ? (
          <h2>{editedTitle}</h2>
        ) : (
          <input
            type="text"
            className="input-title"
            value={editedTitle}
            onChange={handleInputChange}
          />
        )}

        <h2 className="Location">{props.location}</h2>

        {!price ? (
          <div className="expense-item__price">${editedPrice}</div>
        ) : (
          <input
            type="text"
            className="input_expense-item__price input"
            value={editedPrice}
            onChange={handleInputPriceChange}
          />
        )}
        {/* <div className="expense-item__price">${props.price}</div> */}

        {!isEditing && (
          <button className="change_button" onClick={handleTitleClick}>
            Change Title
          </button>
        )}
        {isEditing && (
          <button className="change_button" onClick={handleSaveTitleClick}>
            Save
          </button>
        )}

        {!price && (
          <button className="change_button" onClick={handlePriceClick}>
            Change Price
          </button>
        )}
        {price && (
          <button className="change_button" onClick={handleSavePriceClick}>
            Save Price
          </button>
        )}

        <button onClick={handleDelete} className="delete_button">
          Delete
        </button>
      </div>
    </card>
  );
}

export default ExpenseItem;
