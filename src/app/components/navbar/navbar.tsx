import Link from "next/link";
import ThemeSwitch from "../theming/theme-switch";
import NavLink from "./navlink";

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
          <a data-target="modal-example">
            Rules
          </a>
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