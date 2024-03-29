import { Box, Link } from "@chakra-ui/react";

export const Logo = ({ activeNav, setActiveNav }) => {
  return (
    <Link
      href="#about"
      className={activeNav === "#home" ? "active" : ""}
      onClick={() => setActiveNav("#home")}
      _hover={{ textDecoration: "none" }}
    >
      
      <Box fontSize={25} fontWeight="bold" color="#fe3e57" bg="#0c0b48">
        Mushtaq
      </Box>
    </Link>
  );
};
