import Link from "next/link";
import React from "react";
import ArrowDown from "@public/assets/icons/arrow-down.svg";

const ButtonsLink = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <Link href="#projects">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold z-">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
        </Link>
        <Link href="#contact">
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ButtonsLink;
