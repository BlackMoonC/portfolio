import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-primary text-white flex justify-between py-7 px-5">
      <div className="flex">
        <h1 className=" font-mono font-bold text-3xl font-[name] align-middle subpixel-antialiased">
          <span>🐻</span>Cakra<span>🐻</span>
        </h1>
      </div>
      <nav className="">
        <Link
          className="text-xl hover:bg-secondary hover:rounded-md hover:px-2 hover:py-2 mr-7"
          href="/">
          Home
        </Link>
        <Link
          className="text-xl hover:bg-secondary hover:rounded-md hover:px-2 hover:py-2 mr-7"
          href="/about">
          About
        </Link>
        <Link
          className="text-xl hover:bg-secondary hover:rounded-md hover:px-2 hover:py-2 mr-7"
          href="/blog">
          Blog
        </Link>
        <Link
          className="text-xl hover:bg-secondary hover:rounded-md hover:px-2 hover:py-2 mr-7"
          href="/cv">
          CV
        </Link>
        <Link
          className="text-xl hover:bg-secondary hover:rounded-md hover:px-2 hover:py-2 mr-7"
          href="/portfolio">
          portfolio
        </Link>
      </nav>
    </header>
  );
}

export default Header;
