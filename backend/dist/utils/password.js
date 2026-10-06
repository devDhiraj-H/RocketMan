import bcrypt from "bcrypt";
export const createHashedPassword = async (password) => {
    return bcrypt.hash(password, 10);
};
export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
//# sourceMappingURL=password.js.map