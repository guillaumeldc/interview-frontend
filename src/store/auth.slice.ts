import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

// Define a type for the slice state
interface AuthState {
  isAuth: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

/**
 * Selectors are go here
 * usege = useSelector(selectAuthState);
 */
export const selectAuthState = (state: RootState) => state.auth.isAuth; // Updated line

export default authSlice.reducer;
