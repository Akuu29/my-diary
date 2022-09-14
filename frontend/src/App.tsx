import type { FC } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./components/routing/routes";

const App: FC = () => {
  const router = useRoutes(routes);

  return <>{router}</>;
};

export default App;
