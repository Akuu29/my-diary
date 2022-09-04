import type { FC } from "react";
import { Outlet } from "react-router-dom";

import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Default: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;