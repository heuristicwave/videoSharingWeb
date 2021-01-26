import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";  // default로 export한 것이 아님
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); // static() : directory에서 file을 전달하는 middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);  // local var => globa var

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);       // /users에 userRouter 부여
app.use(routes.videos, videoRouter);     // /videos에 videoRouter 부여

export default app;
