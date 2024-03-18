import {createBrowserRouter} from "react-router-dom";
import Homepage from "../components/Homepage";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
]);