import axios from "axios";

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  let cookies = document.cookie.split("; ");
  const login = cookies.find((cookies) =>
    cookies.startsWith("taskmanagerlogin")
  );
  if (login) {
    let cookievalue = login.split("=");
    return cookievalue[1];
  }
}
const postdata = async (email, password, request) => {
  try {
    const isAccount = readCookie("taskmanagerlogin");
    if (isAccount) {
      console.log("Already have an account");
      return true;
    }
    const post = await axios.post(
      "https://anurag49-task-manager.herokuapp.com/users/login",
      {
        email,
        password,
      }
    );

    console.log(post.data.token);
    const jwt = post.data.token;
    createCookie("taskmanagerlogin", jwt, 10);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default postdata;

// const post = await fetch(
//   "https://anurag49-task-manager.herokuapp.com/users/login",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }
// );
// console.log(post);
// return true;
