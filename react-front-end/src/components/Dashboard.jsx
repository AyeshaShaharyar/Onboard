import React from "react";
import DateToday from "./Date";
import ProgressBar from "./ProgressBar";

const Dashboard = function () {
 
  return (
    <div>
      <h1>Welcome Onboard!</h1>
       <DateToday />
       <ProgressBar />
    </div>
  );
};

export default Dashboard;
