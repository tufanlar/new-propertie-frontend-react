import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
    categories : [],
};

export const categorySlice = createSlice({
    name: "category",
    initialCategoryState,
    reducers: {
        loadCategories: (state, action) => {
            state.categories =  action.payload;
        }
    }
});

// will use in component
export const { loadCategories } = categorySlice.actions;

// will use in store
export default categorySlice.reducer; 
