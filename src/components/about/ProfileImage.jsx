import { Flex, Image } from "@chakra-ui/react";
import profileImage from "./profileImage.jpeg";
export const ProfileImage = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} flex={1}>
      <Image
        w="60%"
        rounded={"full"}
        alt="mushtaq ansari"
        src={profileImage}
        _hover={{
          transform: "scale(1.1)",
          transition: "1s",
        }}
      />
    </Flex>
  );
};
