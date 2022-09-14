import type { FC } from "react";
import { css } from "@emotion/react";

const loginContainer = css({
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

const Login: FC = () => (
  <div css={loginContainer}>
    <p css={TBD}>TBD</p>
  </div>
);

export default Login;
