import fetch from 'isomorphic-fetch'
import {getProducts} from '../actions/product'

export const getAllProducts = ( ) => ( dispatch ) => {
    fetch( "http://localhost:3000/products",{
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => dispatch(getProducts(response)))
}

