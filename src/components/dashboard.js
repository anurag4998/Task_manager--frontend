import React, { useEffect, useState } from "react";
import getTasks from "../apicall/gettasks";
import AddTask from "./addTaskbBar"
let a;
const x = async function () {
  a = await getTasks();
  console.log(a)
};
x();
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(a);
  });
  return (
    <div>
      {tasks}
      <AddTask />
    </div>
  );
};

export default Dashboard;
