import { RootState } from "@redux/configure-store";

export const emailSelect = (state:RootState) =>  state.app.user.login;
export const jwtSelect = (state:RootState) =>  state.app.jwt;
export const passwordSelect = (state:RootState) => state.app.user.password;
export const confirmPasswordSelect = (state:RootState)=> state.app.user.confirmPassword
export const usersFeedbacks = (state:RootState) => state.feedBack.usersFedbacks
export const feedbacksErrorSelect = (state:RootState) => state.feedBack.feedbacksError
export const postFeedbakcSuccess = (state:RootState) => state.postFeedbakc.postFeedbakcSuccess
export const postfeedbacksError = (state:RootState) => state.postFeedbakc.postfeedbacksError
export const isPostfeeedbacksLogged = (state:RootState) => state.postFeedbakc.isPostfeeedbacksLogged