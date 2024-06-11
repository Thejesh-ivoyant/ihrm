import * as constants from './constants'
import { UserSettingsState } from './types'

export const setUser = (value: UserSettingsState) =>
  value?.user
    ? {
        type: constants.SET_USER,
        value,
      }
    : {
        type: constants.SET_USER,
        value: value?.user ? { ...value, user: { ...value.user } } : value,
      }

export const removeUser = () => ({
  type: constants.REMOVE_USER,
})
