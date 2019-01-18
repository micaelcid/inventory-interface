export const setProducts = ( data ) => ( {
    type: "SET",
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