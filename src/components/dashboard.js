import React, { useEffect, useState } from "react";
import getTasks from "../apicall/gettasks";
import AddTask from "./addTaskbBar"
let a;
const Dashboard = () => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchtasks() {
      a = await getTasks();
      setTasks(a)
    };
    fetchtasks()
  }, [])
  return (
    <div>
      <AddTask created={setTasks} />
    </div>
  );
};

export default Dashboard;
