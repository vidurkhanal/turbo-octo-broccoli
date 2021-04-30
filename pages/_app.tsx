// import "../styles/globals.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../utils/theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:8050/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
