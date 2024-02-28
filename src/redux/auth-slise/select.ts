import { RootState } from "@redux/configure-store";




export const singInSelect = (state:RootState) => state.app.status;
export const isLoggedInSelect = (state:RootState) => state.app.isLogged;
