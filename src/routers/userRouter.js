import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postEditProfile,
  postChangePassword,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

//- 순서에 따라서 url 인식이 달라짐
//- 예) userDetail - changePassword일경우, user/change-password를 userdetail로 인식
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
