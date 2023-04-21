import Link from "next/link";
import RuleModalToggleLink from "./links/RuleModalToggleLink";
import ThemeSwitch from "./switches/theme-switch";
import NavLink from "./links/NavLink";


export default function Navbar() {
  return (
    <nav className="container" style={{ maxWidth: 1000, alignItems: "center" }}>
      <h2 style={{ margin: 0 }}>
        <Link href={"/"} style={{ color: "inherit" }}>
          MetaBreaker
        </Link>
      </h2>
      <ul>
        <li><NavLink href={"/"}>Home</NavLink></li>
        <li>
          <RuleModalToggleLink />
        </li>
        <li>
          <NavLink href="/about">
            About
          </NavLink>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  )
}