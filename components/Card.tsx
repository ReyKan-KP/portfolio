import grainImage from "@public/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { Component, ComponentPropsWithoutRef, PropsWithChildren } from "react";
const Card = ({ className,children,...other }: ComponentPropsWithoutRef<"div">) => {
  return (
    <>
      <div className={twMerge("bg-gray-800 overflow-hidden rounded-3xl relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 ",className)}{...other}>
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default Card;
