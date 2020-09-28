import React, { useState } from "react";
import AddTask from "./addTaskbBar"
import Table from "./table"
const Dashboard = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <AddTask created={setTasks} />
      <Table taskarray={tasks} />
    </div>
  );
};

export default Dashboard;
