import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { IUser } from "../models/IUser";
import { IUserAccount } from "../models/IUserAccount";

interface UserState {
  userData: Partial<IUser> | null;
  userAccountData: IUserAccount | null;
}

const initialState: UserState = {
  userData: null,
  userAccountData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Partial<IUser>>) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    setUserAccountData: (state, action: PayloadAction<IUserAccount>) => {
      state.userAccountData = action.payload;
    },
  },
});
export const { setUserData, setUserAccountData } = userSlice.actions;

export const selectUserState = (state: RootState) => state.user;

export default userSlice.reducer;
