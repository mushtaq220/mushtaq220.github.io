import { Flex, Link, Text } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";

export const Resume = () => {
  return (
    <Link
      onClick={() =>
        window.open(
          // "https://drive.google.com/uc?export=download&id=1MgXnc9MBYmhc933ZErxvyR1ntXotO94X"
          "https://drive.google.com/file/d/16pgsNYyn2OxArHs6EM04ohYDpUgV6WW1/view?usp=drive_link"
        )
      }
      download
      style={{ textDecoration: "none" }}
    >
      <Flex alignItems="center" gap="5px">
        <Text>Resume</Text>
        <HiDownload />
      </Flex>
    </Link>
  );
};
