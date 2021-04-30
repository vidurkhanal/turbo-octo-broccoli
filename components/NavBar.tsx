import { Flex } from "@chakra-ui/layout";
import {
  Image,
  Link,
  Button,
  useMediaQuery,
  useBoolean,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  return (
    <Flex
      className="navBar"
      mx={["20px", "20px", "10%"]}
      alignItems="center"
      justifyContent="space-between"
      height="max-content"
    >
      <NextLink href="/">
        <Image
          src="/main-logo.png"
          width={["150px", "150px", "200px"]}
          max-width="400px"
          height="auto"
          alt="main-shortify-logo"
          unselectable={"on"}
          draggable={false}
          loading="eager"
          cursor="pointer"
        />
      </NextLink>
      {isLargerThan500 && (
        <Flex className="navBar__left" alignItems="center" flex={1} mt="10px">
          <Link
            mx="10%"
            as="a"
            _hover={{ textDecoration: "none" }}
            fontWeight="bold"
            fontSize="lg"
          >
            <NextLink href="/plans">Plans</NextLink>
          </Link>
          <Link
            as="a"
            _hover={{ textDecoration: "none" }}
            fontWeight="semibold"
            fontSize="lg"
          >
            <NextLink href="/about">About</NextLink>
          </Link>
        </Flex>
      )}
      <Flex flex={1} justifyContent="flex-end" alignItems="center" mt="10px">
        {isLargerThan500 && (
          <Link
            as="a"
            mr="20px"
            _hover={{ textDecoration: "none" }}
            fontWeight="bold"
            fontSize="lg"
          >
            <NextLink href="/login">Login</NextLink>
          </Link>
        )}

        <Button
          background={"#FF037F"}
          _hover={{ background: "#FF8CBC" }}
          color="white"
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
