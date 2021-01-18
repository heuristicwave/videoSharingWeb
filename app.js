import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";  // default로 export한 것이 아님
const app = express();

// 마지막 함수는 next 인자가 없음, next : 다음 함수 실행
const handleHome = (req, res) => res.send("✅ Hello Home");
const handleProfile = (req, res) => res.send("✅ get profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);       // user에 userRouter 부여

export default app;

