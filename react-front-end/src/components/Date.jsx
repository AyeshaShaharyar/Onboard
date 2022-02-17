import React from "react";

export default function DateToday() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = year + "/" + month + "/" + day;
  const dayToday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];
  return (
    <div>
      <h3>{newdate}</h3>
      <h3>{dayToday}</h3>
    </div>
  );
};
