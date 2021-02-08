import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

// https://github.com/saintedlama/passport-local-mongoose#static-methods
// startegy : 로그인 방식, 원래는 이렇게 => http://www.passportjs.org/docs/configure/
passport.use(User.createStrategy());

// http://www.passportjs.org/packages/passport-github
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// http://www.passportjs.org/docs/basic-digest/
// 클라이언트로부터 어떤 정보를 취득 => 어떤 field가 쿠키에 포함되는지 알려줌
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user)); // 어떤 유저인지 알아냄
