import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCreateMyTreningLoad: false,
    isCreateMyTreningSuccess: false,
    isCreateMyTreningError: false,
};

const createMyTreningSlice = createSlice({
    name: 'createMyTrening',
    initialState,
    reducers: {
        postCreateMyTreningsStart(state) {
            state.isCreateMyTreningLoad = true;
            state.isCreateMyTreningError = false;
        },
        postCreateMyTreningsSuccess(state) {
            state.isCreateMyTreningLoad = false;
            state.isCreateMyTreningSuccess = true;
        },
        postCreateMyTreningsError(state) {
            state.isCreateMyTreningLoad = false;
            state.isCreateMyTreningSuccess = false;
            state.isCreateMyTreningError = true;
        },
        closeCreateALert(state) {
            state.isCreateMyTreningSuccess = false;
        },
        resetCreateMyTreningError(state) {
            state.isCreateMyTreningError = false;
        },
    },
});

export const {
    postCreateMyTreningsStart,
    postCreateMyTreningsSuccess,
    postCreateMyTreningsError,
    closeCreateALert,
    resetCreateMyTreningError,
} = createMyTreningSlice.actions;

export default createMyTreningSlice.reducer;
