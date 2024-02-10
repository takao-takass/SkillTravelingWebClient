import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Top from './Top/Top';
import Certificate from './Certification/Certificate';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Top />
            </div>
        ),
    },
    {
        path: "certification",
        element: (
            <div>
                <Certificate />
            </div>
        ),
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);