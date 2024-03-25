"use client";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar);
  return (
    <>
      <header className="bg-primary text-white flex justify-between py-7 px-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-THREE font-mono font-bold text-3xl font-[name] align-middle subpixel-antialiased">
            <span>🐻</span>Cakra<span>🐻</span>
          </h1>
          <nav className="hidden md:flex space-x-4">
            <Link
              className="text-xl hover:bg-secondary hover:underline"
              href="/">
              Home
            </Link>
            <Link
              className="text-xl hover:bg-secondary hover:underline mr-7"
              href="/about">
              About
            </Link>
            <Link
              className="text-xl hover:bg-secondary hover:underline mr-7"
              href="/blog">
              Blog
            </Link>
            <Link
              className="text-xl hover:bg-secondary hover:underline mr-7"
              href="/cv">
              CV
            </Link>
            <Link
              className="text-xl hover:bg-secondary hover:underline mr-7"
              href="/portfolio">
              portfolio
            </Link>
          </nav>
          <button
            onClick={() => setNavbar(!navbar)}
            className="md:hidden focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* <div className="flex">
      </div>
      <nav className="absolute sm:static bg-primary">

      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
          <Link href="#" className="block text-center text-white">
      </svg> */}
      </header>
      <div className={`${navbar ? "" : "hidden"} w-full absolute`}>
        <nav className="bg-secondary py-2 px-4 space-y-2 border-2 ">
          <Link
            className="block text-center text-white hover:bg-primary"
            href="/">
            Home
          </Link>
          <Link
            className="block text-center text-white hover:bg-primary"
            href="/about">
            About
          </Link>
          <Link
            className="block text-center text-white hover:bg-primary"
            href="/blog">
            Blog
          </Link>
          <Link
            className="block text-center text-white hover:bg-primary"
            href="/cv">
            CV
          </Link>
          <Link
            className="block text-center text-white hover:bg-primary"
            href="/portfolio">
            portfolio
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
