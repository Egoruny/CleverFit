import { createSlice } from '@reduxjs/toolkit';
import { CalendarModalStatus } from '@utils/constans/modal-status';
import moment from 'moment';

const initialState = {
    isOpenModal: false,
    prevData: moment().format('YY-MM'),
    modalStatus:CalendarModalStatus.TRAINING,
};

const trningModals = createSlice({
    name: 'treningModals',
    initialState,
    reducers: {
        togleModal(state, action) {
            state.isOpenModal = action.payload;
        },
        setPrevData(state, action) {
            state.prevData = action.payload;
        },
        setModalStatus(state,action) {
            state.modalStatus = action.payload
        }
    },
});

export const { togleModal,setPrevData,setModalStatus } = trningModals.actions;

export default trningModals.reducer;
