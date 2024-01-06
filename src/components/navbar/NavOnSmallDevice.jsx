import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  Link,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Resume } from "../about/Resume";

export const NavOnSmallDevice = ({ activeNav, setActiveNav }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const clickHandler = (active) => {
    setActiveNav(active);
    onClose();
   };
  
  return (
    <Show below="md">
      <Icon
        boxSize="2rem"
        color={"black"}
        as={FiMenu}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color={"black"}
          />
          <DrawerBody
            fontWeight="medium"
            fontSize={20}
            bg="rgb(245, 250, 245)"
           
          >
            <Link
              transition="0.2s"
              display="block"
              mt="30px"            
              _hover={{
                transition: "0.2s",
                color: "#fe3e57",
                textDecoration: "none",
              }}
              href="#about"
              className={activeNav === "#about" ? "active" : ""}
              onClick={() => clickHandler("#about")}
            >
              About
            </Link>
            <Link
              display="block"
              transition="0.2s"
              mt="30px"    
              _hover={{
                transition: "0.2s",
                color: "#fe3e57",
                textDecoration: "none",
              }}
              href="#teckstacks"
              className={activeNav === "#teckstacks" ? "active" : ""}
              onClick={() => clickHandler("#teckstacks")}
            >
              Teck Stacks
            </Link>
            <Link
              display="block"
              transition="0.2s"
              mt="30px"           
              _hover={{
                transition: "0.2s",
                color: "#fe3e57",
                textDecoration: "none",
              }}
              href="#projects"
              className={activeNav === "#projects" ? "active" : ""}
              onClick={() => clickHandler("#projects")}
            >
              Projects
            </Link>
            <Link
              display="block"
              transition="0.2s"
              mt="30px"            
              _hover={{
                transition: "0.2s",
                color: "#fe3e57",
                textDecoration: "none",
              }}
              href="#contact"
              className={activeNav === "#contact" ? "active" : ""}
              onClick={() => clickHandler("#contact")}
            >
              Contact
            </Link>
            <Text
              transition="0.2s"
              mt="20px"
              onClick={onClose}
              _hover={{ transition: "0.2s", color: "#fe3e57" }}
            >
              <Resume />
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
};
