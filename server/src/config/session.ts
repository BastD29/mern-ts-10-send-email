import session from "express-session";
import { MONGO_URI, SESSION_SECRET } from "./environments";
import MongoStore from "connect-mongo";

export default session({
  secret: SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: MONGO_URI }),
  cookie: { maxAge: 180 * 60 * 1000 },
});
