# vue-js-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project Description
Create a Vue js application for Cricket Team and player management system.

- The system will contains the 3 collection(table).
1. Users
Fields for collection
```
  1. username  (required)
  2. password  (required)
  3. role.     (required) // role should be an enum of [player, team, admin]
  
```


2. Team
Fields for collection
```
  1. name      (required)
  2. logo
  3. tag_line
  4. created_by (required)  // should be match with user_id 
  
```


3. Player
Fields for collection
```
  1. name         (required)
  2. team_id      (required)
  3. skill        (required) // Should be an enum of [Bowler, Batsman, WicketKeeper, AllRounder]
  4. created_by   (required) // should be match with user collection id
  
```


- Role management
1. admin user can access all the routes.
2. team user can perform CRUD on team. Also, team user can delete the player associated with the specific team.
3. player can perform CRUD only on player collection.

- On user login return the JWT token with below payload in response header.
```
   _id: created user id
   role: role of register user
  
```


- You will need to create below routes in system.
1. For user.
1.1. POST /register
1.2. POST /login

2. For Team 
2.1 POST /team/create
2.2 GET /team/list // Only access by all user.
2.3 GET /team/:id // Allow by all user 
2.4 PUT /team/:id
2.5 DELETE /team/:id // If we delete the team all the player associated with that team have to be removed also.

3.For Player 
2.1 POST /player/create
2.2 GET /player/list // access by all user.
2.3 GET /player/:id // access by all user
2.4 PUT /player/:id 
2.5 DELETE /player/:id 

NOTEs:- 
1. All the routes for team or player required `jwt` token in header `auth_token`

2. `PUT` and `DELETE` only able to perform by either Admin or those user whoes jwt token `_id` and specific record's `created_by` field has been match.

3. While create a team or player you will need to set `created_by` property as `jwt` token's payload `_id`.
