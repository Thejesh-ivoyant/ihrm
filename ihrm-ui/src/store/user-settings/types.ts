import type { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type User = {
  email: string;
};

export type GitConfig = {
  username: string;
  pat: string;
};

export type UserSettingsState = {
  user?: {
    email: string;
    id: string | number;
  };
  access_token?: string;
  refresh_token?: string;
};

export type UserSettingsActions = ActionType<typeof actions>;
