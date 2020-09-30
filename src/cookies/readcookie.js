async function readCookie() {
  let cookies = document.cookie.split("; ");
  const login = cookies.find((cookies) =>
    cookies.startsWith("taskmanagerlogin")
  );
  if (login) {
    let cookievalue = login.split("=");
    return { loggedIn: true, token: cookievalue[1] };
  } else return { loggedIn: false };
}

export default readCookie;
