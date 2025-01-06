import { createBrowserRouter } from "react-router-dom";

import Informations from "@/pages/information";
import Home from "@/pages/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/information",
        element: <Informations />,
    },
]);
