import { UserSettingsActions, UserSettingsState } from "./types";
import * as constants from "./constants";

const initialState: UserSettingsState = {};

const userSettings = (
  state = initialState,
  action: UserSettingsActions,
): UserSettingsState => {
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
