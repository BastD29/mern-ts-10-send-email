import { Session, SessionData } from "express-session";

type SessionType = Session &
  Partial<SessionData> & {
    userId: string;
  };

export type { SessionType };
