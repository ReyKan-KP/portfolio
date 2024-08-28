import React from "react";
import StarIcon from "@public/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <>
      <div className={twMerge("flex flex-col", className)}>
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-emerald-300" />
          <h3 className="font=serif text-3xl">{title}</h3>
        </div>
        <p className="text-sm text-white/50 mt-2">{description}</p>
      </div>
    </>
  );
};

export default CardHeader;
