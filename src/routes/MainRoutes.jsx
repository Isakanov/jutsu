import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../compontens/HomePage/Home";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
  ];

  // const menUrl =

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
