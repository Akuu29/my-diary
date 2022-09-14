import type { FC } from "react";
import { css } from "@emotion/react";

const footer = css({
  height: 80,
  background: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const auther = css({
  fontFamily: "Arial Black",
  color: "#F8F8FF",
  borderBottom: "solid 3px #262626",
});

const Footer: FC = () => (
  <div css={footer}>
    <h1 css={auther}>Akeu@2022</h1>
  </div>
);

export default Footer;
