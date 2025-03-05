
import { createBrowserRouter } from "react-router-dom" ; 
import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";
import Blogs from "../components/pages/Blogs";
import App from "../App";
import About from "../components/pages/About";
import SinglePost from "../components/singlePost/SinglePost";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import AdminLogin from "../components/Admin/AdminLogin";
import AdminProtect from "../components/Admin/AdminProtect";
import UnAuthorized from "../components/unauthorized/UnAuthorized";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminUser from "../components/Admin/AdminUser";
import AdminBlog from "../components/Admin/AdminBlog";
import AdminContact from "../components/Admin/AdminContact";
import AdminComment from "../components/Admin/AdminComment";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'contact',
                element:<Contact />
            },
            {
                path:'blogs',
                element:<Blogs />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'/single-post/:id',
                element:<SinglePost />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Register />
            }
        ]
    },
    {
        path:'/admin',
        element:<AdminProtect> <AdminLogin /> </AdminProtect> 
    },
    {
        path:'/unauthorized',
        element:<UnAuthorized />
    },
    {
        path:'/admin/dashboard',
        element:<AdminProtect> <AdminDashboard /> </AdminProtect>,
        children:[
            {
                path:'users',
                element:<AdminUser />
            },
            {
                path:'blogs',
                element:<AdminBlog />
            },
            {
                path:'contacts',
                element:<AdminContact />
            },
            {
                path:'comments',
                element:<AdminComment />
            }
        ]
    }
])