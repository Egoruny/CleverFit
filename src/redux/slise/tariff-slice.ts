import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    isLoad:false,
    tariffs:null,
    tariffSuccses:false,
    tarifBody:{
        tariffId:null,
        days:0
    }
}

const tarifSlice =createSlice ({
    name:'tariffs',
    initialState,
    reducers:{
        getTariffsStart(state) {
            state.isLoad = true
        },
        getTariffsSuccces(state,action) {
            state.tariffs = action.payload
            state.isLoad = false
        },
        setTarifId(state,action) {
            state.tarifBody.tariffId = action.payload
        },
        setTarifDays(state,action) {
            state.tarifBody.days = action.payload
        },
        postTarifStart(state) {
            state.isLoad= true
        },
        postTarifSuccess(state) {
            state.tariffSuccses = !state.tariffSuccses
        }

    }
})




export const {getTariffsStart,getTariffsSuccces,setTarifId,postTarifStart,setTarifDays,postTarifSuccess} = tarifSlice.actions

export default tarifSlice.reducer