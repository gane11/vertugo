**Users**
* GET /api/users/:id - user profile / owner profile
* GET /api/users/:id/clubs - if owner=true / show all the clubs associated with owner
* POST /api/users/:id/clubs - if owner=true/create a club
* PUT /api/users/:id/clubs/:id - if owner=true/edit the club
* POST /api/users -sign up
* GET /api/users/:id/tickets  - get all the tickets for the user

**Session**
* Post /api/session -log in
* Delete /api/session -log out

**Clubs**

* GET /api/clubs -returns a list of all the clubs
* GET /api/clubs/:id -returns a specific club
* GET /api/clubs/:id/parties -returns all the parties for the specific club
* POST /api/clubs/:id/parties -Create a party for the specific club

**Parties**

* PUT api/parties:id -Edit the party
* GET api/parties/:id -returns the specific party
* DELETE parties/:id -Delete the specific party

**Tickets**

* GET parties/:id/tickets/:id -get ticket for a
* POST parties/:id/users/:id/tickets -Create a ticket(when user buys it)


**Save Party**

* POST /api/users/:id/parties/:id/save -Save party