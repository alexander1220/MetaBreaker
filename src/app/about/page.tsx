'use client';
import { Center, Heading, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import BugReportModalToggleLink from "components/links/BugReportModalToggleLink";
import Link from "next/link";

export default function Page() {
  return (
    <Center>
      <VStack spacing={4} align={'left'} maxWidth={'4xl'}>
        <Heading as={'h1'} id="metabreaker">
          MetaBreaker 🎲
        </Heading>
        <Text>MetaBreaker is a League of Legends item build generator that helps you create off-meta builds for every champion. This web application is made by five people as a fun project, and more updates are on the way.</Text>
        <Heading as={'h2'} id="usage-🕹️">
          Usage 🕹️
        </Heading>
        <Text>To use MetaBreaker, simply head to <Link href="/">home</Link> and select a champion. MetaBreaker will generate a random off-meta item build for that champion. You can press 'Roll Again' to generate a new build.</Text>
        <Heading as={'h2'} id="development-👨💻">
          Development 👨‍💻
        </Heading>
        <Text>This web application is built using HTML, CSS, and JavaScript. It also utilizes the Riot Games Data Dragon to
          gather data about champions and items.</Text>
        <Heading as={'h2'} id="bug-🐞">
          Found a bug 🐞 or have a suggestion?
        </Heading>
        <Text>If you have something to share, please use our bug reporter and create a <BugReportModalToggleLink>bug ticket</BugReportModalToggleLink> on the site.</Text>
        <Heading as={'h2'} id="credits-🚀">
          Credits 🚀
        </Heading>
        <Text>MetaBreaker was made by <Link href="https://github.com/alexander1220">alexander1220</Link>, <Link href="https://github.com/satar2332">satar2332</Link>, <Link href="https://github.com/Erdem-Sevilmis">Erdem Sevilmis</Link>, <Link href="https://github.com/Dyuni0r">Dyuni0r</Link> and <Link href="https://github.com/helloplayer1">helloplayer1</Link>.</Text>
        <Text>We'd like to thank the following resources for their help in creating this project:</Text>
        <UnorderedList>
          <ListItem><Link href="https://developer.riotgames.com/docs/lol#data-dragon">Data Dragon</Link></ListItem>
          <ListItem><Link href="https://www.communitydragon.org/">CommunityDragon</Link></ListItem>
          <ListItem><Link href="https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki">League of Legends Wiki</Link></ListItem>
          <ListItem><Link href="https://picocss.com/">Pico</Link></ListItem>
        </UnorderedList>
      </VStack>
    </Center>
  );
}
