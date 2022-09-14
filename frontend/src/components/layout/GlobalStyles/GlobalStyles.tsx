import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

const reset = css(emotionReset);

const GlobalStyles = () => <Global styles={reset} />;

export default GlobalStyles;
