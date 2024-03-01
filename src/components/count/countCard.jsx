// Importing necessary dependencies
import React, { useState, useEffect } from "react";
import { getCounts } from "../../api/api"; // Importing the getCounts function from the api module
import "./countCard.css"; // Importing CSS for styling

// Functional component to display count fetched from API
const CountCard = ({ isUpdated }) => {
  const [count, setCount] = useState(0); // Initializing state for count

  useEffect(() => {
    // Effect to fetch data when component mounts
    async function fetchData() {
      try {
        const counts = await getCounts(); // Fetching counts from the server
        setCount(counts.count); // Setting count in component state
      } catch (error) {
        // Handling error if API call fails
        console.error("Error fetching counts:", error);
      }
    }

    fetchData(); // Invoking fetchData function
  }, [isUpdated]); // Empty dependency array ensures the effect runs only once after initial render

  return <div className="btn btn-info">Api Call Count : {count}</div>; // Rendering count in a styled div
};

export default CountCard; // Exporting the CountCard component
