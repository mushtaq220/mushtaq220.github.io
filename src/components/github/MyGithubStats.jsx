import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
export const MyGithubStats = () => {
  return (
    <Box
      w="80%"
      m="auto"      
      h="auto"
      bg={"rgb(245, 250, 245)"}
      zIndex={3}
    >
      <Box py="30px" color="black" w="100%" maxWidth="1200px" m="auto">
        <Text
          textAlign="center"
          fontWeight="medium"
          fontSize={30}
          mb={30}>
          Git Hub Stats
        </Text>
        <Flex
          px="10px"
          alignItems="center"
          justifyContent="space-between"
          gap={"2rem"}
          flexWrap="wrap"
        >
          <Box minW={["200px", "300px", "300px", "300px"]} flex={1}>
            <Image
               _hover={{
                transform: "scale(1.1)",
                transition: "1s",
                color: "#fe3e57",
                border: "1px solid #ffffff",
              }}
              w="100%"  
              src="https://github-readme-stats.vercel.app/api?username=mushtaq220&show_icons=true&theme=react" alt="GitHub Stats"
            /> 
          </Box>
          <Box minW={["200px", "300px", "300px", "300px"]} flex={1}>
            <Image
               _hover={{
                transform: "scale(1.1)",
                transition: "1s",
                color: "#fe3e57",
                border: "1px solid #ffffff",
              }}
              w="100%"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mushtaq220&layout=compact&theme=react" alt="Top Languages"
            />
          </Box>
          <Box minW={["200px", "300px", "300px", "300px"]} flex={1}>
            <Image
               _hover={{
                transform: "scale(1.1)",
                transition: "1s",
                color: "#fe3e57",
                border: "1px solid #ffffff",
              }}
              w="100%"
              src="https://github-readme-streak-stats.herokuapp.com/?user=mushtaq220&theme=react" alt="GitHub Streak"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
