import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { FormEvent, useState } from "react";
import { useCreateNewLinkMutation } from "../generated/graphql";
import { FcWorkflow } from "react-icons/fc";

interface ShortenerBoxProps {}

export const ShortenerBox: React.FC<ShortenerBoxProps> = ({}) => {
  const [link, setLink] = useState("");
  const [shortifySucessful, setShortifySucessful] = useState(false);
  const toast = useToast();

  const [, CreateNewLink] = useCreateNewLinkMutation();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (!regex.test(link)) {
      toast({
        title: "Invalid URL Data",
        description:
          "The Long URL you have provided is not properly formatted. Please retry with a new value.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setLink("");
      return;
    }
    const { data, error } = await CreateNewLink({ completeLink: link });
    if (!error) {
      toast({
        title: "URL sucessfully shortified.",
        description: "Please click on copy button to copy your shortened URL",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }

    if (data) {
      setLink(`http://localhost:8050/${data?.CreateLink?.shortLink}`);
      setShortifySucessful(true);
    }
  };

  const clicker = () => {
    navigator.clipboard.writeText(link);
    toast({
      title: "Copied Sucessfully",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Box
      boxShadow="0 0 0.1rem 0 rgba(0, 0, 0, .2)"
      borderRadius="5px"
      style={{
        backdropFilter: "blur(5px)",
        background: "rgba(255, 255, 255, .20)",
      }}
      minH="15rem"
      minW="25rem"
      maxW="26rem"
      position="relative"
    >
      <Box padding="15px">
        <form onSubmit={onSubmit}>
          <Box mb="10px">
            <Flex mb="15px" alignItems="center">
              <FcWorkflow />
              <Text as="h3" fontWeight="bold" ml="10px">
                Enter Your Long URL
              </Text>
            </Flex>

            <Input
              colorScheme="whiteAlpha"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              disabled={shortifySucessful}
            />
          </Box>

          {!shortifySucessful ? (
            <>
              <Text
                maxW="100%"
                textAlign="center"
                mt="10px"
                fontWeight="extrabold"
                mb="10px"
              >
                By clicking on Shortify, You agree to all the terms and
                conditions and privacy policies of Shortify.
              </Text>
              <Button
                background={"#FF037F"}
                _hover={{ background: "#FF8CBC" }}
                color="white"
                width="100%"
                height="3rem"
                type="submit"
              >
                Shortify
              </Button>
              <Text my="10px" textAlign="center">
                OR
              </Text>
              <Button
                background={"#00D084"}
                _hover={{ background: "#7BDCB5" }}
                color="white"
                width="100%"
                height="3rem"
              >
                Join Today For Custom Links
              </Button>
            </>
          ) : (
            <>
              <Button
                background={"#FF037F"}
                _hover={{ background: "#FF8CBC" }}
                color="white"
                width="100%"
                height="3rem"
                onClick={clicker}
              >
                Copy To Clipboard
              </Button>
              <Text my="10px" textAlign="center">
                OR
              </Text>
              <Button
                background={"#00D084"}
                _hover={{ background: "#7BDCB5" }}
                color="white"
                width="100%"
                height="3rem"
                onClick={() => {
                  setShortifySucessful(false);
                  setLink("");
                }}
              >
                Shortify Another
              </Button>
            </>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default ShortenerBox;
