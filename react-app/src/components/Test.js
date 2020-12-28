import userReducer from "../store/reducers/signupReducer"

<div className="profile-main__container">
    <div className="profile__main">
        <div className="profile__container">
            <div
                className="cover-image__container"
                style={{
                    backgroundImage:`url(${ownerCover})`
                }}
            >
                <div className="club-name">
                    <h1>{user.name}</h1>
                </div>
            </div>

            <div className="profile__body">
                <div className="parties__container">
                    <div className="album-track__btns">
                        <Button variant="contained" color="primary" onClick={() => showClubs()}>Tickets</Button>
                        <Button variant="contained" color="primary" onClick={() => showParties()}>Saved Parties</Button>
                        <NavLink className="user__name" to={`/users/${user.id}/clubs`} exact={true} activeClassName="active">
                            <Button variant="contained" color="primary"
                            >Create a new club page</Button>
                        </NavLink>
                    </div>
                    {ownerParties ? (
                        <>
                            {clubs.map((club) => {
                                if (club.owner_id === id)
                                    return (
                                        <>
                                            <li>{club.city}</li>
                                            <li>{club.name}</li>
                                        </>
                                    )
                            })}
                        </>
                    ) : (
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

                        )}
                </div>

                <div className="club-info__container">
                    <ul>
                        <li>
                            <strong>Name</strong> {user.name}
                        </li>
                        <li className="bio">
                            <strong>About</strong> {user.od}
                        </li>

                        <li>
                            <strong>City</strong> {user.id}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>