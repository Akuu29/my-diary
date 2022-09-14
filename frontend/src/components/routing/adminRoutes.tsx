import { RouteObject } from "react-router-dom";

import Login from "../../views/Login/LoginPage";

export const generateAdminRoutes = (isAuth: boolean): Array<RouteObject> => {
  const adminRoutes = [
    {
      path: process.env.ADOMIN_HOME,
      element: isAuth ? <></> : <Login />,
    },
  ];

  return adminRoutes;
};
