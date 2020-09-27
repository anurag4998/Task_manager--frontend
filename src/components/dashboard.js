import React, { useEffect, useState } from "react";
import getTasks from "../apicall/gettasks";
import AddTask from "./addTaskbBar"
import Table from "./table"
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
      <Table taskarray={tasks} />
    </div>
  );
};

export default Dashboard;
