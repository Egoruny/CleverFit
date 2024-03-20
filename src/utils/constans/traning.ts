import type { Moment } from 'moment';
import moment from 'moment';

export const getSelectedCell = (date: Moment) =>
    document.querySelectorAll<HTMLElement>(`[title*="${moment(date).format('YYYY-MM-DD')}"]`)[0];

export const getOffsetTop = (date: Moment) => Number(getSelectedCell(date).offsetTop) + 50;

export const getTrainingByDay = (value, training) =>
    training.filter(
        ({ date }) => moment(date).format('YYYY-MM-DD') === moment(value).format('YYYY-MM-DD'),
    );
