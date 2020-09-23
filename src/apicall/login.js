import axios from "axios";

import createCookie from "../cookies/createcookie";

const postlogindata = async (email, password, request) => {
  try {
    const post = await axios.post(
      "https://anurag49-task-manager.herokuapp.com/users/login",
      {
        email,
        password,
      }
    );

    const jwt = post.data.token;
    createCookie("taskmanagerlogin", jwt, 10);
    return { response: true, error: undefined };
  } catch (error) {
    console.log(error);
    return { response: false, error: "Incorrect Username/Password" };
  }
};

export default postlogindata;
