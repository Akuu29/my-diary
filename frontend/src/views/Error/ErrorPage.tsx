import type { FC } from "react";
import { css } from "@emotion/react";

const errorContainer = css({
  height: 600,
  background: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const message = css({
  color: "#F8F8FF",
  fontSize: "50px",
  fontFamily: "Arial Black",
});

const Error: FC = () => (
  <div css={errorContainer}>
    <p css={message}>There&apos;s nothing here!</p>
  </div>
);

export default Error;
