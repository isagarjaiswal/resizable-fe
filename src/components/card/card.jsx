import React, { useState, useRef } from "react";
import "./cards.css";
import { addData } from "../../api/api";

const Card = ({ setIsUpdated }) => {
  const [text, setText] = useState("Add Text here");
  const [isEditable, setIsEditable] = useState(false);
  const textRef = useRef(null);

  const handleAdd = async () => {
    if (text && isEditable) {
      const status = await addData({ content: text });
      if (status === 200) {
        setText("Add Text here");
        setIsEditable(false);
      }
    }
    setIsUpdated((prev) => !prev);
  };

  const handleNew = async () => {
    setText("");
    setIsEditable(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div
          ref={textRef}
          contentEditable={isEditable}
          onBlur={(e) => setText(e.target.textContent)}
          suppressContentEditableWarning={true}
          className={`card-text ${isEditable && "border"}`}
        >
          {text}
        </div>
        <div className="button-container">
          <button
            onClick={handleAdd}
            className={`btn btn-primary ${!isEditable && "not-allowed"}`}
          >
            Add
          </button>
          <button onClick={handleNew} className="btn btn-primary">
            New
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
