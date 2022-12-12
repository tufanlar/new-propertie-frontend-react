
import { Routes, Route } from "react-router-dom";
import AddBlogPage from "./pages/AddBlog.page";
import AddCategoryPage from "./pages/AddCategory.page";
import AddPagesPage from "./pages/AddPages.page";
import AddPageSectionPage from "./pages/AddPageSection.page";
import BlogPage from "./pages/Blog.page";
import BlogsPage from "./pages/Blogs.page";
import LoginPage from "./pages/Login.page";
import NewDemandPage from "./pages/NewDemand.page";
import NotFoundPage from "./pages/NotFound.page";
import PageContentPage from "./pages/PageContent.page";
import SignUpPage from "./pages/Signup.page";
import WelcomePage from "./pages/Welcome.page";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, fab, far);

function App() {
  return (
    <>
      <Routes>
        <Route index element = {<WelcomePage />} />
        <Route path="blogs" element = {<BlogsPage />}>
          <Route path=":catTagId" element = {<BlogsPage />} />
        </Route>
        <Route path="new-demand" element = {<NewDemandPage />}></Route>
        <Route path="blog/:blogTagId" element = {<BlogPage />} />
        <Route path="pages/:pageTagId" element = {<PageContentPage />} />

        <Route path="login" element = {<LoginPage />} />
        <Route path="signup" element = {<SignUpPage />} />

        <Route path="add-category" element = {<AddCategoryPage />} />
        <Route path="add-blog" element = {<AddBlogPage />} />
        <Route path="add-pages" element = {<AddPagesPage />} />
        <Route path="add-page-section" element = {<AddPageSectionPage />} />
        
        <Route path="*" element = {<NotFoundPage />} />
      </Routes>
    </>
    
  );
}
export default App



