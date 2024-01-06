import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

export const ProjectCard = ({ item }) => {
  return (
    <Flex
      w="100%"
      borderRadius="1rem"
      overflow="hidden"
      mt="40px" 
      bg={"rgba(255, 255, 255, 0.804)"}
      color="black"
      direction={["column", "column", "column", "row"]}
      border="1px solid darkgreen"
      _hover={{
        transform: "scale(1.1)",
        transition: "1s",
        border: "1px solid green",
      }}
    >
      <Image w={["100%", "100%", "100%", "50%"]} src={item?.img} />

      <Flex direction="column" w="100%" p="30px">
        <Box flex="1" px="10px">
          <Text textAlign="center" fontWeight="medium" fontSize="1.5rem">
            {item?.title}
          </Text>
          {
            <Text mt="20px" textAlign="center">
              {item?.about}
            </Text>
          }

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            mt="10px"
            gap="10px"
            fontSize={["12px", "12px", "16px", "16px"]}
            fontWeight={"medium"}
          >
            {item?.teckstack?.map((el, index) => {
              return (
                <Flex
                  key={index}               
                  border="1px solid "
                  rounded={"md"}
                  px="5px"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {" "}
                  {el}{" "}
                </Flex>
              );
            })}
          </Flex>
        </Box>

        <Flex
          mt="20px"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            target="_blank"
            href={item?.deployLink}
            style={{ textDecoration: "none" }}
          >
            <Button
              bg="(245, 250, 245)"
              border={"1px solid darkgreen"}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              transition="0.3s"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: "0px 30px",
                backgroundColor: "#fe3e57",
                transition: "0.3s",
              }}
            >
              Live
            </Button>
          </Link>
          <Link
            target="_blank"
            href={item?.github}
            style={{ textDecoration: "none" }}
          >
            <Button
              bg="(245, 250, 245)"
              border={"1px solid darkgreen"}
              boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
              transition="0.3s"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: "0px 30px",
                backgroundColor: "#fe3e57",
                transition: "0.3s",
              }}
            >
              Code
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
