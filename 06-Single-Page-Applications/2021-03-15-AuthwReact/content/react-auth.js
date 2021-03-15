//Welcome Fbw3!
// Topic: React - Authentication 
//Reference: https://reactrouter.com/web/example/auth-workflow

// Intro

    /* 
    - I have created a backend for your react app to communicate with
    - Github repo: https://github.com/thisistaimur/mongo-express-auth
    - This backend also in production on Heroku: https://mongo-express-auth.herokuapp.com
    - API Docs:
        - /register : POST --> email and pass to signup a new user
            Takes: {email: String, Password: String}
        - /login: POST --> to recieve a JWT and login an existing user
            Takes: {email: String, Password: String}
        - /auth-endpoint: GET --> authorize token on protected React pages
            Takes: {`Bearer ${Token}}

    - Please spend 30-45 mins understanding the backend implementation, but remain aware
    of the context here, which is to learn how auth works in React.
    */


    /* 
    - We will be using the following three react hooks:
        1) useState()
        2) useEffect()
        3) useContext() --> OPTIONAL for the bootsrap stuff

    - Today:
        1) Morning session is to set up the login/register pages
        2) look at the backend
        3) let you all set all this up as well. 
        4) Afternoon session: we will finish the react authentication
    */

    //Steps to secure Authentication
        /* 
        - Step 1: To create a login/signup system 
            1.1) Backend API, database, server, Tokens....(all that backend stuff)
            1.1) Frontend pages and logic
        - Step 2: Define protected vs non-protected pages
            2.2) Setting up React Router (ProtectedRoute)
        - Step 3: To protect the necessary Routes
            3.1) make sure you cross-check your token (in a cookie) with your server otherwise there is a security loophole
        - Step 4: To use tokens for maintaining session 
        */

