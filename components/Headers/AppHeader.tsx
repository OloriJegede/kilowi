"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="" style={{ boxShadow: "0px 4px 8px 0px #00000014" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-1">
        <section className="flex justify-between items-center py-4">
          <Link href={`/`}>
            <Image src="/logo.svg" alt="logo" width={188} height={35} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex justify-end items-center space-x-6">
            <div>
              <Link href={`/#buy`}>
                Buy <span className="montserrat-medium">KíLOWí</span>
              </Link>
            </div>
            <div>
              <Link href={`/rules`}>How to Play</Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#1A1A1A] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#1A1A1A] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#1A1A1A] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </section>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-4 h-screen space-y-6 pt-8">
            <div>
              <Link href={`/#buy`} onClick={() => setMenuOpen(false)}>
                Buy <span className="montserrat-semibold">KíLOWí</span>
              </Link>
            </div>
            <div>
              <Link href={`/rules`} onClick={() => setMenuOpen(false)}>
                How to Play
              </Link>
            </div>
            <div>
              <div className="space-y-6 mt-6">
                <Image
                  src={`/amazon.svg`}
                  width={179}
                  height={40}
                  alt="amazon"
                />
                <Image src={`/jumia.svg`} width={153} height={40} alt="jumia" />
                <Image src={`/konga.svg`} width={149} height={40} alt="konga" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
