import {LOAD_PARTIES} from '../reducers/partiesReducer'

export const loadParties = (parties) => ({ type: LOAD_PARTIES, parties })


export const getAllParties = () => async (dispatch) => {
    const res = await fetch('/api/parties')
    if(res.ok) {
        const {parties} = await res.json()
        dispatch(loadParties(parties))
    }
}

