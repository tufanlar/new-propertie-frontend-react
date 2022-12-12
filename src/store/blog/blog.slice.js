import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
    allBlogs : [],
};

export const blogSlice = createSlice({
    name: "blog",
    initialState: initialBlogState,
    reducers: {
        loadBlogs: (state, action) => {
            state.allBlogs =  action.payload;
        }
    }
});

// will use in component
export const { loadBlogs } = blogSlice.actions;

// will use in store
export default blogSlice.reducer; 
