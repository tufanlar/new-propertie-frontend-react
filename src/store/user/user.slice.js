import { createSlice } from "@reduxjs/toolkit";

export const initialUserState = {
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
        setUserData: (state, action) => {
            console.log("State", state);
            if (state !== undefined){
                state.currentUser =  action.payload.userInfo;
                state.token = action.payload.token;
            } else {
                state = initialUserState;
            }
        }
    }
});


export const { setUserData  } = userSlice.actions;

export default userSlice.reducer; 
