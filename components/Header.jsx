import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IconType } from "react-icons";

const navLinks = [
  { name: "About", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Features", path: "#" },
];

const dropdownLinks = [
  {
    name: "Projects",
    path: "#",
    icon: MdTimeline,
  },
  {
    name: "Tech Stack",
    path: "#",
    icon: AiTwotoneThunderbolt,
  },
  {
    name: "Open Source",
    path: "#",
    icon: BsBook,
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Box px={4} boxShadow="lg" width="100%">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        Hızlı Fatura
      </Flex>
    </Box>
  );
}
