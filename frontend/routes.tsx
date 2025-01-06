import { createBrowserRouter } from "react-router-dom";

import Informations from "@/pages/information.jsx";
import Home from "@/pages/index.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/information",
                element: (
                        <Informations />
                ),
            },
        ],
    },
]);
