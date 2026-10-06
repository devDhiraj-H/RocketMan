import { check, validationResult } from "express-validator";
// 1. Define the rules
const passwordRules = [
    check("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number"),
];
// 2. Define the error handler
const checkErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
// 3. Bundle and export them as a single middleware array
export const validatePassword = [...passwordRules, checkErrors];
//# sourceMappingURL=passwordValidation.js.map