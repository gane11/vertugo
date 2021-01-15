import { LOAD_DATE } from '../reducers/dateReducer';

export const loadDate = (date) => ({ type: LOAD_DATE, date })


export const getDate = (date) => async (dispatch) => {

        dispatch(loadDate(date))
}