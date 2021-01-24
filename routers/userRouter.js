import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

//- 순서에 따라서 url 인식이 달라짐
//- 예) userDetail - changePassword일경우, user/change-password를 userdetail로 인식
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
