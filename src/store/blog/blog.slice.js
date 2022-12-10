import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
    blogs : [],
};

export const blogSlice = createSlice({
    name: "blog",
    initialBlogState,
    reducers: {
        loadBlogs: (state, action) => {
            state.blogs =  action.payload;
        }
    }
});

// will use in component
export const { loadBlogs } = blogSlice.actions;

// will use in store
export default blogSlice.reducer; 
