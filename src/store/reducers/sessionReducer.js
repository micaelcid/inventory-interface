const initialState = {
    loggedIn:false
}

//Standard archtecture of a reducer
export default (state = initialState, action) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        
        default: return state;
    }
}