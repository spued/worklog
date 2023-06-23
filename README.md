1. try to add firebase 9 support for this// Firebase initialize need to fire once before use.
need to import firebase to initialize before use
    import { logIn, logOut } from "../firebase/firebase"

2. set env with react-env 
    create .env file in the root of the project
    set environment variables starting with REACT_APP_ there
    access it by process.env.REACT_APP_... in components
    in .env

    REACT_APP_BASE_URL=http://localhost:3000
    in App.js

    const BASE_URL = process.env.REACT_APP_BASE_URL;

3. build react auth context
create userLocalStorage for store data locally.
create context and auth provider

