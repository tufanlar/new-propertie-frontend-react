import { configureStore } from "@reduxjs/toolkit"

import categoryReducer from "./category/category.slice";
import userReducer from "./user/user.slice";
import blogReducer from "./blog/blog.slice";
import pageReducer from "./page/page.slice";

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        pages: pageReducer,
        categories: categoryReducer,
        user: userReducer
    }
});

export default store;