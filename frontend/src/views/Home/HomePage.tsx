import type { FC } from "react";
import { css } from "@emotion/react";

const homeContainer = css({
  height: 600,
  background: "#000000",
  // ---TBD---
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // ---TBD---
});

const TBD = css({
  color: "#F8F8FF",
  fontSize: "50px",
});

const Home: FC = () => (
  <div css={homeContainer}>
    <p css={TBD}>TBD</p>
  </div>
);

export default Home;
