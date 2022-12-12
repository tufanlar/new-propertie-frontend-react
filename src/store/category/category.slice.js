import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
    allCategories : [],
};

export const categorySlice = createSlice({
    name: "category",
    initialState: initialCategoryState,
    reducers: {
        loadCategories: (state, action) => {
            state.allCategories =  action.payload;
        }
    }
});

// will use in component
export const { loadCategories } = categorySlice.actions;

// will use in store
export default categorySlice.reducer; 
