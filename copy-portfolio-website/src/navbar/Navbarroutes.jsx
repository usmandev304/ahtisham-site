import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import Blogclassic from "./pages/blog/blogclassic/Blogclassic";
import BlogDetails from "./pages/blog/Blogdetails/BlogDetails";
import HomeBlogDetails_2 from "./pages/blog/Blogdetails/homeblogdetails_2/homeblogdetails_2";
import HomeBlogDetails_3 from "./pages/blog/Blogdetails/homeblogdetails_3/homeblogdetails_3";
import Project from "./pages/project/Project";
import Projectdetails from "./pages/project/projectdetails/Projectdetails";
import Contact from "./pages/contact/Contact";
import Projectdetail2 from "./pages/project/projectdetails/projectdetail2/Projectdetail2";
import Projectdetails1 from "./pages/project/projectdetails/projectdetails1/projectdetails1";
import Projectdetail3 from "./pages/project/projectdetails/projectdetail3/projectdetail3";
import Projectdetails4 from "./pages/project/projectdetails/projectdetails4/projectdetails4";
import HomeBlogDetails from "./pages/blog/Blogdetails/homeblogdetails/homeblogdetails";
import ServicesDetails from "./pages/services/servicesDetails/ServicesDetails";

export default function Navbarroutes() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "services", element: <Services /> },
                { path: "services-details", element: <ServicesDetails/>},
                { path: "blog", element: <Blog /> },
                { path: "blog/blogclassic", element: <Blogclassic /> },
                { path: "blog/blogdetails", element: <BlogDetails /> },
                { path: "blog/blogdetails/homeblogdetails", element: <HomeBlogDetails /> },
                { path: "blog/blogdetails/homeblogdetails_2", element: <HomeBlogDetails_2 /> },
                { path: "blog/blogdetails/homeblogdetails_3", element: <HomeBlogDetails_3 /> },
                { path: "project", element: <Project /> },
                { path: "project/projectdetails", element: <Projectdetails /> },
                // { path: "project/projectdetails2", element: <Projectdetails /> },
                // App.jsx ya main route file mein check karein
                { path: "/project/projectdetails/projectdetails2", element: <Projectdetail2 /> },
                { path: "/project/projectdetails/projectdetails1", element: <Projectdetails1 /> },
                { path: "project/projectdetails/projectdetails3", element: <Projectdetail3 /> },
                { path: "project/projectdetails/projectdetails4", element: <Projectdetails4 /> },
                { path: "contact", element: <Contact /> },
                { path: "*", element: <div style={{textAlign: 'center', padding: '100px'}}><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p></div> }
            ]
        }
    ]);

    return <RouterProvider router={route} />;
}