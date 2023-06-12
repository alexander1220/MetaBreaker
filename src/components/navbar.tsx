'use client';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import RulesButton from './RulesButton';
import Link from 'next/link';

const Links = [
  {
    href: '/',
    name: 'Home'
  }, {
    href: '/about',
    name: 'About'
  }, {
    href: '/',
    name: 'Rules'
  }
]

const NavLink = ({ children }: { children: { href: string, name: string } }) => (
  <ChakraLink as={Link}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.href}>
    {children.name}
  </ChakraLink>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Link href={"/"} style={{ color: "inherit", textDecoration: 'none' }}>
          <Heading size='md' _hover={{ color: 'blue.300', transform: 'scale(1.1)' }} transition={'all 0.3s ease-out'}>MetaBreaker</Heading>
        </Link>
        <HStack
          as={'nav'}
          spacing={4}
          display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            link.name == "Rules" ? <RulesButton key={link.name} /> : <NavLink key={link.name}>{link}</NavLink>
          ))}
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              link.name == "Rules" ? <RulesButton key={link.name} /> : <NavLink key={link.name}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}