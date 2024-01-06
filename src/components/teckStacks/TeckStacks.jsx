import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BiGitBranch } from "react-icons/bi";
import styles from "../../Styles/TechStack.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiChakraui,
  SiCypress,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const TeckStacks = () => {
  return (
    <Box
      className={styles.bgc}
      id="teckstacks"
      w="100%"     
      h="auto"
      zIndex={3}
    >
      <Box py="30px" color="#ffffff" w="100%" maxWidth="1200px" m="auto">
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Teck Stacks
        </Text>
        <Flex justifyContent="center" flexWrap="wrap" gap="2rem" px="10px">
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={FaHtml5} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              HTML
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={FaCss3Alt} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              CSS
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={SiJavascript} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              JavaScript
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={FaNodeJs} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              NodeJS
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={FaReact} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              ReactJS
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={SiRedux} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              Redux
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={SiChakraui} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              Chakra UI
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={BiGitBranch} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              Git
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={FaGithub} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              Github
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={SiExpress} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              ExpressJS
            </Text>
          </Box>
          <Box
            boxSize="9rem"
            bg="#0c0b48"
            border="1px solid #1B4F72"
            borderRadius="5px"
            padding="8px"
            transition={"0.2s"}
            _hover={{
              transform: "scale(1.1)",
              transition: "1s",
              color: "#fe3e57",
              border: "1px solid #ffffff",
            }}
          >
            <Icon as={SiMongodb} w="100%" h="70%" borderRadius="5px" />
            <Text textAlign="center" fontSize="1.1rem">
              MongoDB
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
