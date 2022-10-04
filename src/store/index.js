import { configureStore } from "@reduxjs/toolkit";
import autherisationSlice from "./reducers/auth";
import booksSlice from "./reducers/books";

const store  =  configureStore({
    reducer : {
        books:booksSlice,
        user:autherisationSlice,
    },
});

export default store;