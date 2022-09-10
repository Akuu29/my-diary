import { RouteObject } from "react-router-dom";

import Login from "../../views/Login/LoginPage";

export const generateAuthRoutes = (isAuth: boolean): Array<RouteObject> => {
  const authRoutes: Array<RouteObject> = [
    {
      path: process.env.AUTH_ROUTE,
      element: !isAuth ? <Login /> : <></>
    }
  ];

  return authRoutes;
};