import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    token: undefined,
    userId: 0,
    isAdmin: false
};

export const userSlice = createSlice({
    name: "user",
    initialUserState,
    reducers: {
        setUser: (state, action) => {
            state.token =  action.payload.token;
            state.userId =  action.payload.userId;
            state.isAdmin =  action.payload.isAdmin ? true : false;
        }
    }
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer; 
