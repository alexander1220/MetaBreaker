import Link from "next/link";

export default function Page() {
  return (
    <main className="container" style={{ maxWidth: '850px' }}>
      <h1 id="metabreaker">
        MetaBreaker
      </h1>
      <p>MetaBreaker is a League of Legends item build generator that helps you create off-meta builds for every champion. This web application is made by five people as a fun project, and more updates are on the way.</p>
      <h2 id="usage-🕹️">
        Usage 🕹️
      </h2>
      <p>To use MetaBreaker, simply head to <Link href="/">home</Link> and select a champion. MetaBreaker will generate a random off-meta item build for that champion. You can press 'ROLL' to generate a new build.</p>
      <h2 id="development-👨💻">
        Development 👨‍💻
      </h2>
      <p>This web application is built using HTML, CSS, and JavaScript. It also utilizes the Riot Games Data Dragon to
        gather data about champions and items.</p>
      <h2 id="bug-🐞">
        Found a bug 🐞 or have a suggestion?
      </h2>
      <p>If you have something to share, please use our bug reporter and create a <a data-target="bug-popup">bug
        ticket</a> on the site.</p>
      <h2 id="credits-🚀">
        Credits 🚀
      </h2>
      <p>MetaBreaker was made by <a href="https://github.com/alexander1220">alexander1220</a>, <a href="https://github.com/satar2332">satar2332</a>, <a href="https://github.com/Erdem-Sevilmis">Erdem Sevilmis</a>, <a href="https://github.com/Dyuni0r">Dyuni0r</a> and <a href="https://github.com/helloplayer1">helloplayer1</a>.</p>
      <p>We’d like to thank the following resources for their help in creating this project:</p>
      <ul>
        <li><a href="https://developer.riotgames.com/docs/lol#data-dragon">Data Dragon</a></li>
        <li><a href="https://www.communitydragon.org/">CommunityDragon</a></li>
        <li><a href="https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki">League of Legends Wiki</a></li>
        <li><a href="https://picocss.com/">Pico</a></li>
      </ul>
    </main>
  );
}
