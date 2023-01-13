import { Box, Flex, Text } from "@chakra-ui/react";
import { Mail } from "./Mail";
import { ContactMe } from "./ContactMe";

export const Contact = () => {
  return (
    <Box id="contact" py="20px" w="100%" h="auto" bg="rgba(255, 255, 255, 0.804)" zIndex={3}>
      <Box w="100%" maxWidth="1200px" m="auto" color="black">
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Contact me
        </Text>
        <Flex alignItems="center" gap="30px" justifyContent={"center"}>
          <Box w={["90%", "80%", "60%", "50%"]} px="10px">
            <Mail />
          </Box>
        </Flex>
        <ContactMe />
      </Box>
    </Box>
  );
};
