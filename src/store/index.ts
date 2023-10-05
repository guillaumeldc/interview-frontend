import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth.slice";
import userReducer from "./user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export * as authSlice from "./auth.slice";
export * as userSlice from "./user.slice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
