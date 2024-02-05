import "./ExpenseItem.css";
import card from "./card";
import ExpenseDate from "./ExpenseDate.js";
import { useState } from "react";

function ExpenseItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);

  function handleTitleClick() {
    setIsEditing(true);
  }
  function handleSaveClick() {
    setIsEditing(false);
  }
  function handleInputChange(event) {
    setEditedTitle(event.target.value);
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
        <div className="expense-item__price">${props.price}</div>

        {!isEditing && (
          <button className="change_button" onClick={handleTitleClick}>
            Change Title
          </button>
        )}
        {isEditing && (
          <button className="change_button" onClick={handleSaveClick}>
            Save
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
