import React, { useEffect, useState } from "react";
import getTasks from "../apicall/gettasks";
import AddTask from "./addTaskbBar"
const Dashboard = () => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchtasks() {
     let a = await getTasks();
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
