'use client';
import RuleModalToggleLink from "./links/RuleModalToggleLink";
import ThemeSwitch from "./switches/theme-switch";
import NavLink from "./links/NavLink";
import { Flex, Spacer, Link, HStack, Heading } from "@chakra-ui/react";


export default function Navbar() {
  /* use chakra templates navbar -> responsive */
  return (
    <Flex alignItems='center' marginBottom={10} p={5}>
      <Link href={"/"} style={{ color: "inherit", textDecoration: 'none' }}>
        <Heading size='md' _hover={{ color: 'blue.300' }}>MetaBreaker</Heading>
      </Link>
      <Spacer />
      <HStack spacing={5}>
        <RuleModalToggleLink />
        <Link href={"/"}>Home</Link>
        <Link href="/about">About</Link>
        <ThemeSwitch />
      </HStack>
    </Flex>
  )
}