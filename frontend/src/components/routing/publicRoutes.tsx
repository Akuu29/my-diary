import { RouteObject } from "react-router-dom";

import Home from "../../views/Home/HomePage";
import Profile from "../../views/Profile/ProfilePage";
import Articles from "../../views/Articles/ArticlesPage";
import Article from "../../views/Article/ArticlePage";
import Projects from "../../views/Projects/ProjectsPage";
import Error from "../../views/Error/ErrorPage";

export const generatePublicRoutes = (): Array<RouteObject> => {
  const publicRoutes: Array<RouteObject> = [
    {
      index: true,
      element: <Home />
    },
    {
      path: "profile",
      element: <Profile />
    },
    {
      path: "articles",
      element: <Articles />
    },
    {
      path: "articles/:articleId",
      element: <Article />
    },
    {
      path: "projects",
      element: <Projects />
    },
    {
      path: "*",
      element: <Error />
    }
  ];

  return publicRoutes;
};