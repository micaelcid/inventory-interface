import fetch from 'isomorphic-fetch'

export function getAllProducts() {
    fetch( "http://localhost:3000/products",{
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
}