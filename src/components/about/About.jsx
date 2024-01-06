import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { AboutText } from "./AboutText";
import { ProfileImage } from "./ProfileImage";
import { Resume } from "./Resume";
import styles from "../../Styles/About.module.css";

export const About = () => {
  return (
    <Box
      className={styles.bgc}
      id="about"
      w="100%"
      h="auto"
      zIndex={3}
    >
      <Flex
        w="100%"
        maxWidth="1200px"
        m="auto"
        direction={["column-reverse", "column-reverse", "row", "row"]}
        py="30px"
      >
        <Flex
          flex={1}
          direction="column"
          justifyContent="center"
          gap={30}
          alignItems="center"
          px="10px"
        >
          <AboutText />
          <Button
            bg={"rgb(245, 250, 245)"}
            border="1px solid #1B4F72"
            color="#ffffff"
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid green",
            }}
          >
            <Resume />
          </Button>
        </Flex>
        <ProfileImage />
      </Flex>
    </Box>
  );
};
