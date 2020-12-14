import React, { useEffect } from 'react'
import NavBarContainer from './NavBar';
import { getAllParties } from '../store/actions/partiesAction'
import { getAllClubs } from '../store/actions/clubsAction'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'




const SearchResult = ({ getAllParties, parties, clubs, getAllClubs}) => {
    
    useEffect(() => {
        getAllParties();
    }, [])

    useEffect(() => {
        getAllClubs()
    }, [])

    if(!parties) return null;

    return (
        <div>
            <NavBarContainer />
            <div>
                <div className="party__section">
                    {parties.map((party) => {

                        return (
                            <Card party={party} clubs={clubs} />
                        )
                    })}
                </div>
            </div>
        </div>
    )

}


const SearchResultContainer = ({searchValue}) => {
    const parties = useSelector((state) => Object.values(state.parties))
    const clubs = useSelector((state) => Object.values(state.clubs))
    const dispatch = useDispatch()
    return (
        <SearchResult
            searchValue={searchValue}
            clubs={clubs}
            getAllClubs={() => dispatch(getAllClubs())}
            parties={parties}
            getAllParties={() => dispatch(getAllParties())}
        />
    )
}


export default SearchResultContainer;