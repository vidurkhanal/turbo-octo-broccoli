import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { AiOutlineUser } from "react-icons/ai";
import NextLink from "next/link";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

interface loginProps {}

const login: React.FC<loginProps> = ({}) => {
  return (
    <Box>
      <Head>
        <title>Login To Shortify</title>
        <link rel="icon" href="/lock-icon.png" />
      </Head>
      {/* <NavBar /> */}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        direction="column"
      >
        <Image
          src="main-logo.png"
          width={"130px"}
          max-width="400px"
          height="auto"
        />
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Don't Have An Account?{" "}
              <Link color={"blue.400"}>Register Now</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <NextLink href="/">
                  <Button
                    w={"full"}
                    maxW={"md"}
                    variant={"outline"}
                    leftIcon={<AiOutlineUser />}
                  >
                    <Center>
                      <Text>Continue As Guest</Text>
                    </Center>
                  </Button>
                </NextLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
export default login;
