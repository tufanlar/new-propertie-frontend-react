import { createSlice } from "@reduxjs/toolkit";

const initialPageState = {
    allPages : [],
    pageSections : []
};

export const pageSlice = createSlice({
    name: "page",
    initialState: initialPageState,
    reducers: {
        loadPages: (state, action) => {
            state.allPages =  action.payload;
        }, 
        loadPageSections: (state, action) => {
            state.pageSections =  action.payload;
        }
    }
});

// will use in component
export const { loadPages , loadPageSections } = pageSlice.actions;

// will use in store
export default pageSlice.reducer; 
