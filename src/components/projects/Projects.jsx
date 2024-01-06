import { Box, Text } from "@chakra-ui/react";
import { projetArr } from "../../utils/Constants";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box
      id="projects"
      w="100%"
      h="auto"    
      bg={"rgb(245, 250, 245)"}
      zIndex={3}
    >
      <Box
        px="5px"
        w="100%"
        maxWidth="1200px"
        m="auto"
        color="#ffffff"
        py="30px"
      >
        <Text textAlign="center" color="black" fontWeight="medium" fontSize={30} mb={30}>
          Projects
        </Text>
        {projetArr?.map((el, index) => (
          <ProjectCard
            item={el}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};
