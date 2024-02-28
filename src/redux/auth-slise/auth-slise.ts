import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "@utils/constans/type";



const initialState: AuthType = {
    isLogged: false,
    error: false,
    checkBox:false,
    user:{
        login:'',
        password:'',
        confirmPassword:''
    }
};

const authSlise = createSlice({
 name:'auth',
 initialState,
 reducers: {
    setLogin(state,action) {
        state.user.login = action.payload
    },
    setPassword(state,action) {
        state.user.password = action.payload
    },
    setConfirmPassword(state,action){
        state.user.confirmPassword = action.payload
    },
    postLoginStart(state,action) {
state.isLogged =true
state.error = false
    },
    postLoginSaccses (state) {
        state.isLogged = false
    },
    postLoginError(state) {
        state.error = true
        state.isLogged = false
    },
    postRegistratonStart(state,action) {
state.isLogged =true
state.error = false
    },
    postRegistratonSaccses (state) {
        state.isLogged =false
    },
    postRegistratonError(state,action) {
        state.error = true
        state.isLogged = false
    },
    postFogorPsswordStart(state,action) {
        state.isLogged =true
        state.error = false
    },
    postFogorPsswordSaccses (state) {
        state.isLogged =false
    },
    postFogorPsswordError(state,action) {
        state.error = true
        state.isLogged = false
    },
    postConfirmEmailStart(state,action) {
        state.isLogged =true
        state.error = false
    },
    postConfirmEmailSaccses (state) {
        state.isLogged =false
    },
    postConfirmEmailError(state,action) {
        state.error = true
        state.isLogged = false
    },
    postChengePasswordStart(state,action) {
        state.isLogged =true
        state.error = false
    },
    postChengePasswordSaccses (state) {
        state.isLogged =false
    },
    postChengePasswordError(state,action) {
        state.error = true
        state.isLogged = false
    },

 },
})


export const {

    setLogin,
    setPassword,
    setConfirmPassword,
    postLoginError,
    postLoginStart,
    postLoginSaccses,
    postRegistratonStart,
    postRegistratonSaccses,
    postRegistratonError,
    postFogorPsswordStart,
    postFogorPsswordSaccses,
    postFogorPsswordError,
    postConfirmEmailStart,
    postConfirmEmailSaccses,
    postConfirmEmailError,
    postChengePasswordStart,
    postChengePasswordSaccses,
    postChengePasswordError
    } = authSlise.actions
export default authSlise.reducer

