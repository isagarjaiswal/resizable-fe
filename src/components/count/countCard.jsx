import React, { useState, useEffect } from "react";
import { getCounts } from "../../api/api";
import "./countCard.css";

const CountCard = ({ isUpdated }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const counts = await getCounts();
        setCount(counts.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    }
    fetchData();
  }, [isUpdated]);

  return <div className="btn btn-info">Api Call Count : {count}</div>;
};

export default CountCard;
