import { UserSettingsActions, UserSettingsState } from "./types";
import * as constants from "./constants";

const initialState: Partial<UserSettingsState> = {}; // Update initial state type

const userSettings = (
  state = initialState,
  action: UserSettingsActions,
): Partial<UserSettingsState> => { // Update return type
  switch (action.type) {
    case constants.SET_USER:
      return action.value;
    case constants.REMOVE_USER:
      return {};

    default:
      return state;
  }
};

export default userSettings;
