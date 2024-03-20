import { RootState } from '@redux/configure-store';

export const desctopVersionSelect = (state: RootState) => state.app.desctopVersion;
export const emailSelect = (state: RootState) => state.auth.user.login;
export const jwtSelect = (state: RootState) => state.auth.jwt;
export const passwordSelect = (state: RootState) => state.auth.user.password;
export const confirmPasswordSelect = (state: RootState) => state.auth.user.confirmPassword;
export const selectedDateSelect = (state: RootState)  => state.traningList.selectedDate;
export const usersFeedbacks = (state: RootState) => state.feedBack.usersFedbacks;
export const feedbacksErrorSelect = (state: RootState) => state.feedBack.feedbacksError;
export const postFeedbakcSuccess = (state: RootState) => state.postFeedbakc.postFeedbakcSuccess;
export const postfeedbacksError = (state: RootState) => state.postFeedbakc.postfeedbacksError;
export const isPostfeeedbacksLogged = (state: RootState) =>state.postFeedbakc.isPostfeeedbacksLogged;
export const istraningListLoadSelect = (state: RootState) => state.traningList.isTraningListLoad;
export const isOpenModalSelect =  (state: RootState) => state.treningModals.isOpenModal
export const traningListErrorSelect  = (state: RootState) => state.traningList.traningListError;
export const userTraningListSelect  = (state: RootState) => state.traningList.userTraningList;
export const istraningCatalogsLoadSelect  = (state: RootState) => state.traningCatalogs.istraningCatalogsLoad;
export const traningCatalogsSelect  = (state: RootState) => state.traningCatalogs.traningCatalogs;
export const traningCatalogsErrorSelect  = (state: RootState) => state.traningCatalogs.traningCatalogsError;
export const calendarModalStatusSelect = (state: RootState) => state.treningModals.modalStatus;
export const selectedTraningSelect = (state: RootState) => state.traningList.selectedTraning;
export const prevDataSelect = (state: RootState) => state.treningModals.prevData;
export const updateErrorSelect = (state: RootState) => state.updateTrening.UpdateTraningError;
export const createErrorSelect = (state: RootState) => state.createTraning.error;
