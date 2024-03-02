import React, { useState, useEffect } from "react";
import { getAllData, updateData } from "../../api/api";
import "./dataList.css";

const DataList = ({ isUpdated, setIsUpdated }) => {
  const [data, setData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getAllData();
        setData(responseData?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, [isUpdated]);

  const handleUpdate = async ({ _id }) => {
    setIsEditable((prev) => !prev);

    if (isEditable && text) {
      try {
        setIsUpdated((prev) => !prev);
        await updateData({ content: text, _id });
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.textContent);
  };

  return (
    <>
      {data.map((d, i) => (
        <div className="chip" key={i}>
          <div
            contentEditable={isEditable}
            suppressContentEditableWarning={true}
            onBlur={handleTextChange}
            className={`${isEditable && "border"}`}
          >
            {d.content}
          </div>
          <button onClick={() => handleUpdate(d)} className="btn btn-success">
            Update
          </button>
        </div>
      ))}
    </>
  );
};

export default DataList;
