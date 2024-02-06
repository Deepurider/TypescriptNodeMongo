import { Router } from "express";
import {
  deleteAllUser,
  deleteUser,
  getUserById,
  getUsers,
  patchUser,
  putUser,
  postUser,
} from "../../controllers/user.controller";
import { authorize } from "../../middlewares/authorize";

const router = Router();

router.use(authorize);
router.route("/").get(getUsers);
router.route("/:_id").get(getUserById);
router.route("/:_id").put(putUser);
router.route("/").patch(patchUser);
router.route("/").post(postUser);
router.route("/all").delete(deleteAllUser);
router.route("/:_id").delete(deleteUser);

export default router;
