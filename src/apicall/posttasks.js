import axios from "axios";
import readCookie from "../cookies/readcookie";

const cookie = readCookie();

const postTasks = async (description, completed) => {
  try {
    if (!description)
      return { created: false, error: "Add a task to get started" }
    const tasks = await axios.post(
      "https://anurag49-task-manager.herokuapp.com/tasks",
      {
        description,
        completed
      },
      {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      }
    );

    return { created: true }
  }

  catch (e) {
    return { created: false, error: "Try again" }
  }

};


export default postTasks;