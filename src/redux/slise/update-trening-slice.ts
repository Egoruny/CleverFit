import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isUpdateTraningLoad: false,
    UpdateTraningError: false,
};

const updateTraningSlise = createSlice({
    name: 'updateTraning',
    initialState,
    reducers: {
        putUpdateTreningStart(state) {
            state.isUpdateTraningLoad = true;
            state.UpdateTraningError = false;
        },
        putUpdateTreningSaccses(state) {
            state.isUpdateTraningLoad = false;
        },
        putUpdateTreningError(state) {
            state.isUpdateTraningLoad = false;
            state.UpdateTraningError = true;
        },
    },
});

export const { putUpdateTreningStart, putUpdateTreningSaccses, putUpdateTreningError } =
    updateTraningSlise.actions;

export default updateTraningSlise.reducer;
