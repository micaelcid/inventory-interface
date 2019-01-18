
//Standard archtecture of a reducer
export default (state = false, action) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        
        default: return state;
    }
}