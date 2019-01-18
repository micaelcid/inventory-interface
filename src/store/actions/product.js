export const GET    = 'products:getProducts'
export const CREATE = 'products:pushProduct'
export const UPDATE = 'products:updateProduct'
export const DELETE = 'products:deleteProducts'


export function getProducts(data){
    return{
        type: GET,
        data
    }
}

export function pushProduct(data){
    return{
        type:CREATE,
        data
    }
}

export function updateProduct(data){
    return{
        type:UPDATE,
        data
    }
}

export function deleteProduct(data){
    return{
        type:DELETE,
        data
    }
}