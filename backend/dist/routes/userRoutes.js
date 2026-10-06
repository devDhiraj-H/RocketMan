import epxress from "express";
import { canLogin, doRegsiter } from "../controller/userController.js";
import { validatePassword } from "../middleware/passwordValidation.js";
const router = epxress.Router();
router.post("/login", canLogin);
router.post("/register", validatePassword, doRegsiter);
export default router;
//# sourceMappingURL=userRoutes.js.map