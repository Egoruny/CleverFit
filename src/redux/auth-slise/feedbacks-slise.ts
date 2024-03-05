import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isfeeedbacksLogged: false,
    feedbacksError: false,
    usersFedbacks: [],
};

const feedbacksSlise = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        getFeedbacksStart(state) {
            state.isfeeedbacksLogged = true;
            state.feedbacksError = false;
        },
        getFeedbacksSaccses(state) {
            state.isfeeedbacksLogged = false;
        },
        getFeedbacksError(state, action) {
            state.feedbacksError = action.payload;
            state.isfeeedbacksLogged = false;
        },
        usersFedbacksAction(state, action) {
            state.usersFedbacks = action.payload;
        },
    },
});

export const { usersFedbacksAction, getFeedbacksStart, getFeedbacksSaccses, getFeedbacksError } =
    feedbacksSlise.actions;

export default feedbacksSlise.reducer;
