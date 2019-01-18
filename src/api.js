import fetch from "isomorphic-fetch";


export function getAllProducts( ) {
    return fetch( "http://localhost:3000/products",{
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then( res => res.json( ) )


}

export function fetchCircuits( ) {
    return fetch( "http://ergast.com/api/f1/2018/circuits.json" )
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits )
}
