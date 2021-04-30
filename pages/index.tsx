import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import Head from "next/head";
import NavBar from "../components/NavBar";
import ShortenerBox from "../components/ShortenerBox";
import Wave from "../components/Wave";

export default function Home() {
  return (
    <Box position="relative" overflowX="hidden">
      <Head>
        <title>Shortify You Links. Its' Free.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Flex
        minH="90vh"
        minW="100%"
        alignItems="center"
        mx={["20px", "20px", "7%"]}
      >
        <Box flex="0.6">
          <Image src="/vector art.png" loading="eager" draggable={false} />
        </Box>
        <Box flex="0.2" />
        <ShortenerBox />
      </Flex>
      <Wave />
    </Box>
  );
}
