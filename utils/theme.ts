import { ColorMode, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

export default theme;
