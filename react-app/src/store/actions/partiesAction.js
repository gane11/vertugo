import { loadParties } from '../reducers/partiesReducer'


export const getAllParties = (searchValue) => async (dispatch) => {
    const res = await fetch('/api/parties')
    if(res.ok) {
        const parties = await res
    }
}