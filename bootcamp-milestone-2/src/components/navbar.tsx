import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={style.navbar}>
      <h1 className="logo"> Sanaia's Personal Website </h1>
      <nav className="nav-list">
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <Link className="nav-list-item" href="/">
          Home
        </Link>
        <Link className="nav-list-item" href="/blog">
          Sanaia's Blog
        </Link>
        <Link className="nav-list-item" href="/portfolio">
          Sanaia's Portfolio
        </Link>
        <Link className="nav-list-item" href="/resume">
          Sanaia's Resume
        </Link>
        <Link className="nav-list-item" href="/about">
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
