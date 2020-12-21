import React, {useEffect} from 'react';
import { getAllParties } from '../store/actions/partiesAction'
import {getAllClubs} from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'
import { getSavedParties } from '../store/actions/savePartyAction'




const HomeParties = ({getAllParties, parties, clubs, getAllClubs}) => {
   let searchValue = 'San Francisco'
    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])

    let ids = []
    for(let i = 0; i < clubs.length; i++) {
        let currentClub = clubs[i]
        if(currentClub.city === searchValue) {
            ids.push(i +1)
        }
    }


    if(!parties) return null

    return(
        <div>
            <div className="party__section">
                {parties.map((party) => {
                    if (ids.includes(party.club_id)) {
                    return(
                    <Card party={party} clubs={clubs}/>
                    )
                }})}
            </div>
        </div>
    )
}


const HomePartiesContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state)=> Object.values(state.clubs))
    const saved_parties = useSelector((state) => Object.values(state.saved_party))
    const dispatch = useDispatch()

    return (
        <HomeParties
            clubs={clubs}
            getAllClubs={() => dispatch(getAllClubs())}
            parties={parties}
            getAllParties={()=> dispatch(getAllParties())}
        />
    )
}


export default HomePartiesContainer;