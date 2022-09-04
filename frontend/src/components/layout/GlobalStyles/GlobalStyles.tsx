import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const reset = css(
  emotionReset
);

const GlobalStyles = () => {
  return <Global styles={reset}></Global>;
};

export default GlobalStyles;