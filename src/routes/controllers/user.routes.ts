import { Router } from "express";
import {
  deleteAllUser,
  deleteUser,
  getUsers,
  patchUser,
  putUser,
  registerUser,
} from "../../controllers/user.controller";

const router = Router();

router.route("/").get(getUsers);
router.route("/:_id").put(putUser);
router.route("/").patch(patchUser);
router.route("/").post(registerUser);
router.route("/all").delete(deleteAllUser);
router.route("/:_id").delete(deleteUser);

export default router;
