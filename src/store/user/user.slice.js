import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    token: undefined,
    currentUser : {
        userId: 0,
        isAdmin: false  
    }
    
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser =  action.payload;
        },
        setToken: (state, action) => {
            state.token =  action.payload;
        }
    }
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer; 
