import { Global } from "@emotion/react";
import { css, GlobalStyles } from "twin.macro";

const App = ({ Component, pageProps }) => (
  <div>
    <Global
      styles={css`
        body {
          background-color: rgb(245, 245, 245);
        }
      `}
    />
    <GlobalStyles css={{ backgroundColor: "gray" }} />
    <Component {...pageProps} />
  </div>
);

export default App;
