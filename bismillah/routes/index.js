import  express  from "express";
import { getusers, Register, Login, Logout } from "../cotroller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../cotroller/refreshToken.js";
const router = express.Router();

router.get("/users", verifyToken, getusers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;