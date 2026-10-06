import { findUser, findUserName, createUser, } from "../repository/userReopsitory.js";
import { createHashedPassword, comparePassword } from "../utils/password.js";
export const checkLogin = async (username, password) => {
    if (!username || username == "") {
        throw new Error("Valid username required");
    }
    if (!password || password == "") {
        throw new Error("Valid password required");
    }
    //check whether login exists else return false
    const result = await findUser(username);
    if (!result)
        return undefined;
    const password_check = await comparePassword(password, result.hashed_password);
    console.log(result.hashed_password, password_check);
    return password_check;
};
export const registerUser = async (username, password, email) => {
    if (!username || username == "") {
        throw new Error("Valid username required");
    }
    const hashedPassword = await createHashedPassword(password);
    // check if username or email exists
    const result2 = await findUserName(username, email);
    console.log(result2);
    if (result2 !== undefined) {
        if (result2.email === email) {
            throw new Error("email already in use");
        }
        if (result2.username === username) {
            throw new Error("username already in use");
        }
    }
    // add the username, password, email to db
    const newUser = await createUser(username, hashedPassword, email);
    console.log("newUser created id is : ", newUser);
    return newUser;
};
//# sourceMappingURL=userService.js.map