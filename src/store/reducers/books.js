import { createSlice } from "@reduxjs/toolkit";

const booksSlice =  createSlice({
    name :'products',
    initialState : { 
        books : []
    },
    reducers : { 
        getProducts : (state, action) => {},
    },
})

export const { getProducts } =  booksSlice.actions
export default booksSlice.reducer