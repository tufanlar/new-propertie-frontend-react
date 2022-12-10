import { createSlice } from "@reduxjs/toolkit";

const initialPageState = {
    pages : [],
    pageSections : []
};

export const pageSlice = createSlice({
    name: "page",
    initialPageState,
    reducers: {
        loadPages: (state, action) => {
            state.page =  action.payload;
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
