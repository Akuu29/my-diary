import { RouteObject } from "react-router-dom";

import Default from "./components/layout/Default/Default";
import Home from "./views/Home/HomePage";
import Profile from "./views/Profile/ProfilePage";
import Articles from "./views/Articles/ArticlesPage";
import Article from "./views/Article/ArticlePage";
import Projects from "./views/Projects/ProjectsPage";
import Login from "./views/Login/LoginPage";
import Error from "./views/Error/ErrorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Default />,
    children: [
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
        element: <Articles />,
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
        path: process.env.SECRET_ROOT,
        element: <Login />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
];

export default routes;