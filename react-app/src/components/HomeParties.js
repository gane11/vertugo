import React, {useEffect} from 'react';
import { getAllParties } from '../store/actions/parties'
import { useSelector, useDispatch } from 'react-redux';



const HomeParties = ({getAllParties, parties, clubs}) => {
   let searchValue = 'San Francisco'
    useEffect(() => {
        getAllParties(searchValue);
    }, [])

    



    if(!party) return null

    return(
        <div>
            <div className="party__section">
                {parties.map((party) => {
                    
                    return(
                    <Card party={party} />
                    )
                    })}
            </div>
        </div>
    )
}


const HomePartiesContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const dispatch = useDispatch()

    return (
        <HomeParties
            parties={parties}
            getAllParties={(searchValue)=> dispatch(getAllParties(searchValue))}
        />
    )
}


export default HomePartiesContainer;