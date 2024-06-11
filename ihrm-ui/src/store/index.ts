import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["userApplications", "OEApi1", "OEApi2"],
};

const PersistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: PersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: { warnAfter: 128 },
    }),
      // .concat(api.middleware)
      // .concat(authapi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
