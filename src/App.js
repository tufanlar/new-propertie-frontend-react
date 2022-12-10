
import { Routes, Route } from "react-router-dom";
import AddBlogPage from "./pages/AddBlog.page";
import AddCategoryPage from "./pages/AddCategory.page";
import AddPagesPage from "./pages/AddPages.page";
import AddPageSectionPage from "./pages/AddPageSection.page";
import BlogPage from "./pages/Blog.page";
import BlogsPage from "./pages/Blogs.page";
import LoginPage from "./pages/Login.page";
import NotFoundPage from "./pages/NotFound.page";
import PageContentPage from "./pages/PageContent.page";
import SignUpPage from "./pages/Signup.page";
import WelcomePage from "./pages/Welcome.page";


function App() {
  return (
    <>
      <Routes>
        <Route index element = {<WelcomePage />} />
        <Route path="login" element = {<LoginPage />} />
        <Route path="signup" element = {<SignUpPage />} />
        <Route path="add-pages" element = {<AddPagesPage />} />
        <Route path="add-blog" element = {<AddBlogPage />} />
        <Route path="blogs/:catId" element = {<BlogsPage />} />
        <Route path="blog/:blogId" element = {<BlogPage />} />
        <Route path="pages/:pageId" element = {<PageContentPage />} />
        <Route path="add-page-section" element = {<AddPageSectionPage />} />
        <Route path="add-category" element = {<AddCategoryPage />} />
        <Route path="*" element = {<NotFoundPage />} />
      </Routes>
    </>
    
  );
}
export default App



