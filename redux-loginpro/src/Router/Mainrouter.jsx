import { createBrowserRouter } from "react-router-dom";
import HeaderComponent from "../CommonCompo/HeaderCompo.jsx";
import Login from "../CommonCompo/Login.jsx";
import Signup from "../CommonCompo/Signup.jsx";
import Admin from "../CommonCompo/Admin.jsx";
import Edituser from "../CommonCompo/Admin/Edituser.jsx";
import React, { Suspense } from "react";

const Mainroute = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
        </>,

    },
    {
        path: "/login",
        element: <>
            <HeaderComponent />
            <Login />
        </>,

    },
    {
        path: "/signup",
        element: <>
            <HeaderComponent />
            <Signup />
        </>,
    },
    {
        path: "/admin",
        element: <>
            <HeaderComponent />
            <Admin />
        </>,
    },
    {
        path: "/edituser/:id",
        element: <>
            <HeaderComponent />
            <Edituser />
        </>,
    }
])
export default Mainroute;