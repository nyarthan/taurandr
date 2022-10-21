import type { BoxProps, FlexProps } from '@chakra-ui/react';
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Link,
  Button,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as RLink } from '@tanstack/react-location';
import HorizontalCollapse from './components/horizontal-collapse';
import type React from 'react';

interface NavItemProps extends FlexProps {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ to, children, ...rest }: NavItemProps) => {
  return (
    <RLink to={`/displays/${to}`}>
      <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.900',
            color: 'white',
          }}
          {...rest}
        >
          {children}
        </Flex>
      </Link>
    </RLink>
  );
};

interface SidebarContentProps extends BoxProps {
  monitors: string[];
}

function SidebarContent({ monitors, ...rest }: SidebarContentProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      pos="fixed"
      h="full"
      {...rest}
      w={350}
      pl={50}
      ml={-50}
      style={{ position: 'relative', right: 0 }}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Taurandr
        </Text>
      </Flex>
      {monitors.map((link) => (
        <NavItem key={link} to={link}>
          {link}
        </NavItem>
      ))}
      {/* eslint-disable-next-line react/jsx-handler-names */}
      <Button onClick={toggleColorMode}>{colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}</Button>
    </Box>
  );
}

interface SidebarProps {
  monitors: string[];
  children: React.ReactNode;
}

export default function Sidebar({ monitors, children }: SidebarProps) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box minH="100vh" minW="100vw" bg={useColorModeValue('gray.100', 'gray.900')}>
      <HorizontalCollapse isOpen={isOpen}>
        <SidebarContent monitors={monitors} />
      </HorizontalCollapse>
      {children}
      <Button onClick={onToggle}>Toggle</Button>
    </Box>
  );
}
