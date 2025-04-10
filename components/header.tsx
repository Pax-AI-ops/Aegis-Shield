import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#111", padding: "10px 20px", color: "white" }}>
      <h1>Welcome to Aegis Shield</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/upgrade">Upgrade</Link>
      </nav>
    </header>
  );
};

export default Header;
