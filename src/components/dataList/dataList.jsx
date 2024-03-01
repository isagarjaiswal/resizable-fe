import React, { useState, useEffect } from "react";
import { getAllData, updateData } from "../../api/api";
import "./dataList.css";

const DataList = ({ isUpdated }) => {
  const [data, setData] = useState([]); // State to store fetched data
  const [isEditable, setIsEditable] = useState(false); // State to manage edit mode
  const [text, setText] = useState("");
  useEffect(() => {
    // Function to fetch data when component mounts
    const fetchData = async () => {
      try {
        const responseData = await getAllData(); // Fetching all data from the API
        setData(responseData?.data || []); // Setting fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
      }
    };

    fetchData(); // Invoking fetchData function

    // Clean-up function (optional)
    return () => {
      // Perform any clean-up (if required)
    };
  }, [isUpdated]);

  const handleUpdate = async ({ _id }) => {
    setIsEditable((prev) => !prev); // Toggling edit mode

    if (!isEditable && text) {
      // Checking if edit mode is enabled
      try {
        await updateData({ content: text, _id }); // Calling API to update data
      } catch (error) {
        console.error("Error updating data:", error);
        // Handle error if needed
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
