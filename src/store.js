import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { getAllProducts } from "./api";


let initialState = {
    products: [],
}


export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

const storeProducts = ( data ) => ( {
    type: "GET",
    data,
} );

export const pushProduct = ( data ) => ( {
    type: "CREATE",
    data,
} );

export const updateProduct = ( data ) => ( {
    type: "UPDATE",
    data,
} );

export const deleteProduct = ( data ) => ( {
    type: "DELETE",
    data,
} );
 
const productsReducer = ( state = [], action ) => {
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
};


export const fetchData = ( ) => ( dispatch ) =>
    getAllProducts().then( res => dispatch( storeProducts( res ) ))



const reducer = combineReducers( {
    products: productsReducer,
} );



export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
