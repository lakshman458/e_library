import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import { loginAction } from "../actions/auth";

const autherisationSlice = createSlice({
    name : "auth",
    initialState : {
        id:"", 
        username :"",
        email:"",
        moile :"",
    },
    reducers : {
        [loginAction.type] : (state,action) => {
            state.email = action.payload.email;
            state.id = action.payload.id
        }
    }
})


export const getUser = (email, password) => { 
    return async (dispatch) => {
        try { 
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        const user = users.find((user) => user.email === email);
        if(!user) throw 'User not found';
        dispatch(autherisationSlice.actions[loginAction.type](user));
    } catch(err){
        throw(err);
    }       
}
    
}
export default autherisationSlice.reducer;