import { RouteObject } from "react-router-dom";

import Default from "../layout/Default/Default";

import { generatePublicRoutes } from "./publicRoutes";
import { generateAuthRoutes } from "./authRoutes";
import { generateAdminRoutes } from "./adminRoutes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Default />,
    children: [
      ...generatePublicRoutes(),
      ...generateAuthRoutes(false),
      ...generateAdminRoutes(false),
    ]
  }
];

export default routes;