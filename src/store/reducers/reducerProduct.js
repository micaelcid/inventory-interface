const initialState = {
    products: [],
}

//Standard archtecture of a reducer
export default (state = initialState, action) => {
    switch ( action.type ) {
        case "GET":
            return action.data;
        case "CREATE":
            return [
                ...state, 
                action.data
            ];
        case "UPDATE":
            for(let i in state){
                if(state[i].id == action.data.id){
                    state[i].titulo = action.data.titulo
                    state[i].descricao = action.data.descricao
                    state[i].preco = action.data.preco
                }
            }
            return state
        case "DELETE":
            return state.filter(product => product.id != action.data)
        default: return state;
    }
}