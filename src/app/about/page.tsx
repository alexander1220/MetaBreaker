'use client';
import { Center, Heading, ListItem, Text, UnorderedList, VStack, useColorModeValue } from '@chakra-ui/react';
import BugReportModalToggleLink from 'components/links/BugReportModalToggleLink';
import Link from 'next/link';

export default function Page() {

  return (
    <Center p={'50px'}>
      <VStack spacing={4} align={'left'} maxWidth={'4xl'}>
        <Heading as={'h1'} id='metabreaker'>
          MetaBreaker 🎲
        </Heading>
        <Text>MetaBreaker (v1.1) is a League of Legends item build generator that helps you create off-meta builds for every champion. This web application is made by five people as a fun project, and more updates are on the way.</Text>
        <Heading as={'h2'} id='usage-🕹️'>
          Usage 🕹️
        </Heading>
        <Text>To use MetaBreaker, simply head to <Link style={{ color: 'teal' }} href='/'>home</Link> and select a champion. MetaBreaker will generate a random off-meta item build for that champion. You can press &apos;Roll Again&apos; to generate a new build.</Text>
        <Heading as={'h2'} id='development-👨💻'>
          Development 👨‍💻
        </Heading>
        <Text>This web application is built using Next.js and Chakra UI. It also utilizes the Riot Games Data Dragon to
          gather data about champions and items.</Text>
        <Heading as={'h2'} id='bug-🐞'>
          Found a bug 🐞 or have a suggestion?
        </Heading>
        <Text>If you have something to share, please use our bug reporter and create a <BugReportModalToggleLink>bug ticket</BugReportModalToggleLink> on the site.</Text>
        <Heading as={'h2'} id='credits-🚀'>
          Credits 🚀
        </Heading>
        <Text>MetaBreaker was made by <Link style={{ color: useColorModeValue('#d9324b', 'crimson') }}
          href='https://github.com/alexander1220' target='_blank'>alexander1220</Link>, <Link style={{ color: useColorModeValue('#d93296', 'DarkOrange') }}
            href='https://github.com/satar2332' target='_blank'>satar2332</Link>, <Link style={{ color: useColorModeValue('#bd32d9', 'Yellow') }}
              href='https://github.com/Erdem-Sevilmis' target='_blank'>Erdem Sevilmis</Link>, <Link style={{ color: useColorModeValue('#5632d9', 'Chartreuse') }}
                href='https://github.com/Dyuni0r' target='_blank'>Dyuni0r</Link> and <Link style={{ color: useColorModeValue('#32a7d9', 'Turquoise') }}
                  href='https://github.com/helloplayer1' target='_blank'>helloplayer1</Link>.</Text>
        <Text>We&apos;d like to thank the following resources for their help in creating this project:</Text>
        <UnorderedList>
          <ListItem><Link style={{ color: 'teal' }} href='https://developer.riotgames.com/docs/lol#data-dragon' target='_blank'>Data Dragon</Link></ListItem>
          <ListItem><Link style={{ color: 'teal' }} href='https://www.communitydragon.org/' target='_blank'>CommunityDragon</Link></ListItem>
          <ListItem><Link style={{ color: 'teal' }} href='https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki' target='_blank'>League of Legends Wiki</Link></ListItem>
        </UnorderedList>
      </VStack>
    </Center>
  );
}
