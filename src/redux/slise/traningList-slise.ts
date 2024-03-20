import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialExercise = {
    name: '',
    approaches: 1,
    weight: 0,
    replays: 1,
};

const initialTraining = {
    date: '',
    name: '',
    isImplementation: false,
    exercises: [initialExercise],
};

const initialState = {
    selectedDate: null,
    selectedTraning: initialTraining,
    isTraningListLoad: false,
    traningListError: false,
    prevState:initialTraining,
    userTraningList: [],
};

const traningListSlise = createSlice({
    name: 'traningList',
    initialState,
    reducers: {
        setPrevState(state,action) {
            state.prevState = action.payload
            state.prevState.exercises = [initialExercise];
        },
        setSelectedDate(state, action) {
            state.selectedDate = action.payload;
        },
        getTraningListStart(state) {
            state.isTraningListLoad = true;
            state.traningListError = false;
        },
        getTraningListSaccses(state) {
            state.isTraningListLoad = false;
        },
        getTraningListError(state) {
            state.traningListError = true;
            state.isTraningListLoad = false;
        },
        setUseruserTraningList(state, action) {
            state.userTraningList = action.payload;
        },
        updateTraning(state, action) {
            const { isPast } = action.payload;
            if (isPast) {
                state.selectedTraning.isImplementation = true;
            }
        },
        deleteExercises(state, action) {
            const indexArray = action.payload;
            const updatedExercises = state.selectedTraning.exercises.filter((_, index) => !indexArray.includes(index));
        const updatedSelectedTraning = { ...state.selectedTraning, exercises: updatedExercises }
        return {...state,selectedTraning:updatedSelectedTraning}
        },
        setCreateSelectedTraning(state, action) {
            state.selectedTraning = action.payload;
            state.selectedTraning.exercises = [initialExercise];

        },
        setSelectedTraning(state, action) {
            state.selectedTraning = action.payload;
        },
        setSelectedPrevTrain(state, action) {
            state.prevState = action.payload;
        },
        createExercise(state) {
            state.selectedTraning.exercises.push(initialExercise);
        },
        setExerciseName(state, action) {
            const { index, name } = action.payload;
            state.selectedTraning.exercises[index].name = name;
        },
        setExerciseWeight(state, action) {
            const { index, weight } = action.payload;
            state.selectedTraning.exercises[index].weight = weight;
        },
        setExerciseApproaches(state, action) {
            const { index, approaches } = action.payload;
            state.selectedTraning.exercises[index].approaches = approaches;
        },
        setExerciseReplays(state, action) {
            const { index, replays } = action.payload;
            state.selectedTraning.exercises[index].replays = replays;
        },
        addTrening(state, action) {
            state.userTraningList.push(action.payload);
        },
        resetCreatedTraining(state) {
            state.selectedTraning = initialTraining;
        },
    },
});

export const {
    setSelectedPrevTrain,
    setPrevState,
    addTrening,
    getTraningListStart,
    getTraningListSaccses,
    getTraningListError,
    setUseruserTraningList,
    setSelectedTraning,
    setCreateSelectedTraning,
    setExerciseName,
    createExercise,
    updateTraning,
    resetCreatedTraining,
    setSelectedDate,
    setExerciseWeight,
    setExerciseApproaches,
    deleteExercises,
    setExerciseReplays,
} = traningListSlise.actions;

export default traningListSlise.reducer;
