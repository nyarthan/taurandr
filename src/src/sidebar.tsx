import {
  Box,
  Text,
  BoxProps,
  Flex,
  useColorModeValue,
  Link,
  FlexProps,
  Drawer,
  DrawerContent,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface SidebarProps {
  monitors: string[];
}

export default function Sidebar({ monitors }: SidebarProps) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        monitors={monitors}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen
        placement="left"
        returnFocusOnClose={false}
        size="full"
        onClose={() => {}}
      >
        <DrawerContent>
          <SidebarContent monitors={monitors} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

interface SidebarContentProps extends BoxProps {
  monitors: string[];
}

function SidebarContent({ monitors, ...rest }: SidebarContentProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("whiteAlpha.900", "gray.800")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Taurandr
        </Text>
      </Flex>
      {monitors.map((link) => (
        <NavItem key={link}>{link}</NavItem>
      ))}
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Box>
  );
}

interface NavItemProps extends FlexProps {
  children: React.ReactNode;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.900",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};
