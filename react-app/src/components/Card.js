import React, { useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import './Card.css'
import { NavLink, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import {saveParty} from '../store/actions/savePartyAction'
import { getSavedParties, removeSavedParty } from "../store/actions/savedPartiesAction";
import BuyModal from './BuyModal'

///material UI
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));


//material UI





const Card = ({ party, clubs, club, savedParties, getSavedParties}) => {
    const [saved, setSaved] = useState()
    const history = useHistory();

    let partySaved
    let owner 

    
    let user_id = localStorage.getItem("user_id");
    if(club) {

        if (club.owner_id === Number(user_id)) {
            owner = true
        }
    }

    if(clubs) {
        if (clubs[party.club_id].owner_id === Number(user_id)) {
            owner= true
        }
    }
    const dispatch = useDispatch()

    const classes = useStyles()

    const handleSave = async (e) => {
        e.preventDefault();
        if(user_id) {
        await dispatch(saveParty(user_id,party.id))
        setSaved(true)
        partySaved = true
        } else {
            history.push("/login")

        }
    }


    const handleRemove = async (e) => {
        e.preventDefault();
        partySaved = false
        await dispatch(removeSavedParty(user_id,party.id))
        setSaved(false)
        partySaved = false
    }

    useEffect(() => {
        getSavedParties(user_id)
    }, [user_id])



    if(savedParties) {
        savedParties.map((savedParty) => {
            if (party.id === savedParty.party_id) {
                partySaved = true
                
            }
                
        })
    }

   
    return (
        <>
        
                <div className="card">
                <a className="carda" href={`/clubs/${party.club_id}`}>
                    <img src="https://media.giphy.com/media/1pA5jtbM2YkKCaibkX/giphy.gif" alt=""></img>
                    <div className="card__info">
                        <h2>{party.description}</h2>
                        {/* <h4>{home.description}</h4> */}
                        <h3>{party.start_date.split('00:')[0]}</h3>
                        {club? (
                            <h4>{club.name}</h4>
                        ): (
                            
                        <h4>{clubs[party.club_id - 1].name}</h4>
                        )}
                    </div>
                </a>
                    {!owner? (
                    <div className="card__buttons">
                        
                        {partySaved || saved? (
                        <Button size="large" variant="contained" color="primary" onClick={handleRemove}
                        >REMOVE</Button>
                        ):(
                            <Button size="large" variant="contained" color="primary" onClick={handleSave}
                            >SAVE</Button>
                        ) } 
                        <BuyModal  party={party} user_id={user_id}/>
                           
                    </div>

                    ): (
                        null
                    )}
                </div>
        </>

    )
}


const CardContainer = ({ party, clubs, club }) => {
    const savedParties = useSelector((state) => Object.values(state.savedParties))
    const dispatch = useDispatch()
    return (
        <Card 
            party={party}
            club={club}
            clubs={clubs}
            savedParties={savedParties}
            getSavedParties={(user_id) => dispatch(getSavedParties(user_id))}
        />
    )
}


export default CardContainer
