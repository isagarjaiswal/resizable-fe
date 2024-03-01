import React from "react";
import "./cards.css";
const Card = () => {
  const handleAdd = () => {
    // onAdd(inputThought);
    // setInputThought('');
  };

  const handleUpdate = () => {
    // onUpdate(inputThought);
    // setInputThought('');
  };
  const handleShowCount = () => {};
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Thought Card</h2>
        <p className="card-text">Lorem ipsum dolor sit amet.</p>
        <div className="button-container">
          <button onClick={handleAdd} className="btn btn-primary">
            Add
          </button>
          <button onClick={handleUpdate} className="btn btn-success">
            Update
          </button>
          <button onClick={handleShowCount} className="btn btn-info">
            Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
