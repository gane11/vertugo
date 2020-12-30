import React, { useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import './Card.css'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import {saveParty, removeSavedParty} from '../store/actions/savePartyAction'
import { getSavedParties } from "../store/actions/savePartyAction";

/////modal

import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

//modal


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

    //modal
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    //modal
}));


//material UI

///modal logic 

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

//modal logic



const Card = ({ party, clubs, club, savedParties, getSavedParties}) => {
    const [saved, setSaved] = useState()
    let partySaved

    let user_id = localStorage.getItem("user_id");
    const dispatch = useDispatch()

    const classes = useStyles()

    const handleSave = async (e) => {
        e.preventDefault();
        await dispatch(saveParty(user_id,party.id))
        setSaved(true)
        partySaved = true

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


    //modal logic 

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //modal logic


    if(savedParties) {
        if(savedParties.saved_parties) {
            savedParties.saved_parties.map((savedParty) => {
            let partyId = savedParty.party_id
            if (party.id === partyId) partySaved = true
                
        })
    }
    }


    return (
        <>
        
            <NavLink className="user__name" to={`/clubs/${party.club_id}`}>
                <div className="card">
                    <img src={party.party_cover_pic} alt=""></img>
                    <div className="card__info">
                        <h2>{party.description}</h2>
                        {/* <h4>{home.description}</h4> */}
                        <h3>{new Date(party.start_date).toDateString()}</h3>
                        {club? (
                            <h4>{club.name}</h4>
                        ): (
                            
                        <h4>{clubs[party.club_id - 1].name}</h4>
                        )}
                    </div>
                    <div>
                        {saved || partySaved ? (
                        <Button variant="contained" color="primary" onClick={handleRemove}
                        >REMOVE</Button>
                        ):(
                            <Button variant="contained" color="primary" onClick={handleSave}
                            >SAVE</Button>
                        ) } 
                            <Button variant="contained" color="primary" type="button" onClick={handleOpen}
                                >BUY</Button>
                            <Button />
                            <Modal
                                aria-labelledby="spring-modal-title"
                                aria-describedby="spring-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div className={classes.paper}>
                                        <h2 id="spring-modal-title">1015 Folsom</h2>
                                        <h4>10/20/2020</h4>
                                        <p>San Francisco</p>
                                        <p>Priec: Free </p>
                                        <Button variant="contained" color="primary">Buy</Button>
                                    </div>
                                </Fade>
                            </Modal>
                    </div>
                </div>
            </NavLink>
        </>

    )
}


const CardContainer = ({ party, clubs, club }) => {
    const savedParties = useSelector((state) => (state.saveParty))
    const dispatch = useDispatch()
    return (
        <Card 
            party={party}
            club={club}
            clubs={clubs}
            savedParties={savedParties}
            getSavedParties={(id) => dispatch(getSavedParties(id))}
        />
    )
}


export default CardContainer
