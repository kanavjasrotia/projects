import React from "react";
import { useSelector } from "react-redux";
import "./ShowData.css";
const ShowData = () => {
  const details = useSelector((state) => state.details);

  const myData = Object.entries(details).map((entry, index) => (
    <div className="data" key={index}>
      {entry[0]} => {entry[1]}
    </div>
  ));

  return <>{myData}</>;
};

export default ShowData;
