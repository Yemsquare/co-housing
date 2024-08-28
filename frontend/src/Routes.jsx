import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import Notfound from "pages/Notfound";
import LandingPage from "pages/LandingPage";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <Notfound /> },
        {
            path: "landingpage",
            element: <LandingPage />,
        },
    ]);
    return element;
};

export default ProjectRoutes;