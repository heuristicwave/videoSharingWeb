import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  // http://expressjs.com/ko/api.html#res.locals
  res.locals.siteName = "VSW";
  res.locals.routes = routes;
  // sample for userDetail test
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
// upload.pug의 videoFile, 하나의 비디오 파일만 올라감
export const uploadVideo = multerVideo.single("videoFile");
