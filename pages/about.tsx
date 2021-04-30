import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Wave from "../components/Wave";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  return (
    <Box>
      <Head>
        <title>About Shortify</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <main>Hello</main>
      <Wave />
    </Box>
  );
};
export default about;
