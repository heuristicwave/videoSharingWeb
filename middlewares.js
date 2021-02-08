import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  // http://expressjs.com/ko/api.html#res.locals
  res.locals.siteName = "VSW";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

// login 후, 접근제어 관리
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

// upload.pug의 videoFile, 하나의 비디오 파일만 올라감
export const uploadVideo = multerVideo.single("videoFile");
