import axios from "axios";
import readCookie from "../cookies/readcookie";
import deletecookie from "../cookies/deletecookie";

const Logout = async () => {
    let cookie = await readCookie()
    try {
        const user = await axios.post("https://anurag49-task-manager.herokuapp.com/users/logoutall", {}, {
            headers: {
                Authorization: `Bearer ${cookie.token}`,
            },
        });
        await deletecookie()
        return { response: true }
    }

    catch (e) {
        return { error: "Check your connection or Try again" }
    }

}

export default Logout