import CalendarCreateTraningModal from '../calendar-create-traning-modal/calendar-create-traning-modal';
import CalendarExercisesModal from '../calendar-exercises-modal/calendar-exercises-modal';
import CastomDrawer from '@components/drawer/drawer';
import { useState } from 'react';
import moment from 'moment';
import { isPastDate } from '@utils/constans/getPastDate';
import { setModalStatus } from '@redux/slise/trening-modals-slice';
import { CalendarModalStatus } from '@utils/constans/modal-status';
import { useAppSelector, useAppDispatch } from '@redux/configure-store';
import { calendarModalStatusSelect } from '@redux/slise/select';
import { setSelectedTraning, setSelectedPrevTrain } from '@redux/slise/traningList-slise';
import { userTraningListSelect, selectedDateSelect} from '@redux/slise/select';

import { getTrainingByDay } from '@utils/constans/traning';
import style from './calendar-cell-modal.module.css';

const CalendarCellModal = ({ date, offsetTop }) => {
    const trenings = useAppSelector(userTraningListSelect);
    const dateSelected = useAppSelector(selectedDateSelect);
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useAppDispatch();
    const modalStatus = useAppSelector(calendarModalStatusSelect);
    const setExercisesStatus = () => dispatch(setModalStatus(CalendarModalStatus.EXERCISES));
    const setTreningStatus = () => dispatch(setModalStatus(CalendarModalStatus.TRAINING));
    const trainingByDay = getTrainingByDay(date, trenings);
    const cardRigth = moment(dateSelected).day() === 0 || moment(dateSelected).day() === 6;
    const pastDate = isPastDate(date);

    const onChangeTrainingHandler = (name: string) => {
        const findedSelectTraning = trainingByDay.find((exercise) => exercise.name === name);
        if (findedSelectTraning) {
            dispatch(setSelectedTraning(findedSelectTraning));
            dispatch(setModalStatus(CalendarModalStatus.EXERCISES));
            dispatch(setSelectedPrevTrain(findedSelectTraning));
        }
    };
    const openDrawer = () => {
        setIsEdit(false);
        setOpenDrawer(true);
    };
    const closeDrawer = () => {
        setOpenDrawer(false);
    };

    const onChangeExercisesDrawerOpen = () => {
        setIsEdit(true);
        setOpenDrawer(true);
    };
    return (
        <>
            <div
                style={{ right: cardRigth ? 240 : '', top: offsetTop }}
                className={style.modal_wrapper}
            >
                {modalStatus === CalendarModalStatus.TRAINING && (
                    <CalendarCreateTraningModal
                        isPastDate={pastDate}
                        trenings={trainingByDay}
                        date={date}
                        setExercisesStatus={setExercisesStatus}
                        onChange={onChangeTrainingHandler}
                    />
                )}
                {modalStatus === CalendarModalStatus.EXERCISES && (
                    <CalendarExercisesModal
                        trainings={trainingByDay}
                        isEdit={isEdit}
                        date={date}
                        setTreningStatus={setTreningStatus}
                        openDrawer={openDrawer}
                        onChangeExercisesDrawerOpen={onChangeExercisesDrawerOpen}
                        isPastDate={pastDate}
                    />
                )}
            </div>
            <CastomDrawer open={isOpenDrawer} onClose={closeDrawer} date={date} isEdit={isEdit} />
        </>
    );
};

export default CalendarCellModal;
