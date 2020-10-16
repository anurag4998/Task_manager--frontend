import axios from "axios";
import readCookie from "../cookies/readcookie";
import deletecookie from "../cookies/deletecookie";

const Deleteuser = async () => {
    let cookie = await readCookie()
    try {
        await axios.delete("https://anurag49-task-manager.herokuapp.com/users/me", {
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

export default Deleteuser