import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  // http://expressjs.com/ko/api.html#res.locals
  res.locals.siteName = "VSW";
  res.locals.routes = routes;
  next();
};
