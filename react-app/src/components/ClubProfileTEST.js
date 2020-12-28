import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getClub } from '../store/actions/clubAction';
import { getAllParties } from '../store/actions/partiesAction'
import { getAllClubPictures } from '../store/actions/clubPicturesAction'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import Card from './Card'
import Map from './Map'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

//tabs
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

///tabs


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1260,
        height: 800,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));





const ClubProfile = ({ club, getClub, parties, getAllParties, clubPictures, getAllClubPictures }) => {
    const { id } = useParams();
    const clubId = Number.parseInt(id);
    let userIdString = localStorage.getItem("user_id");
    let userId = Number(userIdString)

    let owner

    // const [picturesSelected, setPicturesSelected] = useState(false)
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    useEffect(() => {
        getClub(clubId)
    }, [clubId])

    useEffect(() => {
        getAllParties()
    }, [])

    useEffect(() => {
        getAllClubPictures(clubId)
    }, [clubId])

    if (club) {
        if (club.owner_id === userId) {
            owner = true
        }
    }




    if (!club) return null;



    // const showParties = () => {
    //     setPicturesSelected(false)
    // }

    // const showPictures = () => {
    //     setPicturesSelected(true)

    // }


    return (
        <div className="profile-main__container">
            <div className="profile__main">
                <div className="profile__container">
                    <div
                        className="cover-image__container"
                        style={{
                            backgroundImage: `url(${club.club_cover_pic})`
                        }}
                    >
                        {/* <img src={club.club_cover_pic} alt={club.club_cover_pic} className="profile_image" /> */}
                        <div className="club-name">
                            <h1>{club.name}</h1>
                        </div>
                    </div>

                    <div className="profile__body">
                        <div className="parties__container">
                            <div className="album-track__btns">
                                <Button variant="contained" color="primary" onClick={() => showParties()}>Parties</Button>
                                <Button variant="contained" color="primary" onClick={() => showPictures()}>Pictures</Button>
                            </div>
                            <div className={classes.root}>
                                <AppBar position="static">
                                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                        <Tab label="Item One" {...a11yProps(0)} />
                                        <Tab label="Item Two" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0}>
                                    <>
                                        {owner ? (
                                            <div>
                                                <Button variant="contained" color="primary" >Add Pictures</Button>
                                            </div>

                                        ) : (
                                                null
                                            )}
                                        <div className="party__container">
                                            <div className={classes.root}>
                                                <GridList cellHeight={400} spacing={1} className={classes.gridList}>
                                                    {clubPictures[0].map((clubPicture) => (
                                                        <GridListTile key={clubPicture.picture_url} cols={1} rows={1}>
                                                            <a href={clubPicture.picture_url}>
                                                                <img className="club-profile__image" src={clubPicture.picture_url} alt={clubPicture.club_id} href={clubPicture.picture_url} />
                                                            </a>
                                                            <GridListTileBar
                                                                title={clubPicture.club_id}
                                                                titlePosition="top"
                                                                actionPosition="left"
                                                                className={classes.titleBar}
                                                            />
                                                        </GridListTile>
                                                    ))}
                                                </GridList>
                                            </div>
                                        </div>
                                    </>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <>
                                        {owner ? (
                                            <div>
                                                <NavLink className="user__name" to={`/clubs/${club.id}/parties`} exact={true} activeClassName="active">
                                                    <Button variant="contained" color="primary"
                                                    >Create Party</Button>
                                                </NavLink>
                                            </div>

                                        ) : (
                                                null
                                            )}
                                        <div className="party__container">
                                            <div className="party__section">
                                                {parties.map((party) => {
                                                    if (party.club_id === club.id) {
                                                        return (
                                                            <Card party={party} club={club} />
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </>
                                </TabPanel>
                            </div>
                            {/* {picturesSelected ? (
                            <>
                                {owner ?(
                                <div>
                                    <Button variant="contained" color="primary" >Add Pictures</Button>
                                </div>

                                ): (
                                    null
                                )}
                                <div className="party__container">
                                    <div className={classes.root}>
                                        <GridList cellHeight={400} spacing={1} className={classes.gridList}>
                                            {clubPictures[0].map((clubPicture) => (
                                                <GridListTile key={clubPicture.picture_url} cols={1} rows={1}>
                                                    <a href={clubPicture.picture_url}>
                                                        <img className="club-profile__image" src={clubPicture.picture_url} alt={clubPicture.club_id} href={clubPicture.picture_url} />
                                                   </a>
                                                    <GridListTileBar
                                                        title={clubPicture.club_id}
                                                        titlePosition="top"
                                                        actionPosition="left"
                                                        className={classes.titleBar}
                                                    />
                                                </GridListTile>
                                            ))}
                                        </GridList>
                                    </div>
                                </div>
                            </>                          
                            ) : (
                                <>
                                {owner?(
                                <div>
                                    <NavLink className="user__name" to={`/clubs/${club.id}/parties`} exact={true} activeClassName="active">
                                        <Button variant="contained" color="primary"
                                        >Create Party</Button>
                                    </NavLink>
                                </div>

                                ): (
                                    null
                                )}  
                            <div className="party__container">
                                <div className="party__section"> 
                                {parties.map((party) => {
                                    if (party.club_id === club.id) {
                                        return (
                                            <Card party={party} club={club} />
                                        )
                                    }
                                })}
                            </div>
                            </div>
                                </>
                            )} */}
                        </div>

                        <div className="club-info__container">
                            <ul>
                                <li>
                                    <strong>Name</strong> {club.name}
                                </li>
                                <li className="bio">
                                    <strong>About</strong> {club.description}
                                </li>

                                <li>
                                    <strong>City</strong> {club.city}
                                </li>
                                <li>
                                    <strong>Address</strong> <Map newLat={club.lat} newLng={club.lng} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

const ClubProfileContainer = () => {
    const parties = useSelector((state) => Object.values(state.parties))
    const club = useSelector((state) => state.club)
    const clubPictures = useSelector((state) => Object.values(state.clubPictures))
    const dispatch = useDispatch()

    return (
        <ClubProfile
            club={club}
            getClub={(clubId) => dispatch(getClub(clubId))}
            parties={parties}
            getAllParties={() => dispatch(getAllParties())}
            clubPictures={clubPictures}
            getAllClubPictures={(clubId) => dispatch(getAllClubPictures(clubId))}
        />
    )
}


export default ClubProfileContainer