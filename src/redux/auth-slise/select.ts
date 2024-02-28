import { RootState } from "@redux/configure-store";

export const emailSelect = (state:RootState) =>  state.app.user.login;
export const passwordSelect = (state:RootState) => state.app.user.password;
export const confirmPasswordSelect = (state:RootState)=> state.app.user.confirmPassword