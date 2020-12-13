import React, {useEffect} from 'react';
import { getAllParties } from '../store/actions/partiesAction'
import {getAllClubs} from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'



const HomeParties = ({getAllParties, parties, clubs, getAllClubs}) => {
   let searchValue = 'San Francisco'
    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])


    if(!parties) return null

    return(
        <div>
            <div className="party__section">
                {parties.map((party) => {
                    
                    return(
                    <Card party={party} clubs={clubs}/>
                    )
                    })}
            </div>
        </div>
    )
}


const HomePartiesContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state)=> Object.values(state.clubs))
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