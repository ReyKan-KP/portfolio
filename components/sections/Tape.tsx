import StarIcon from "@public/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Intuitive",
  "Engaging",
  "Customizable",
  "Dynamic",
  "Modern",
  "Optimized",
  "Efficient",
  "Seamless",
  "Innovative",
  "Functional",
  "Flexible",
];

export const TapeSection = () => {
  return (
    <div className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      {/* Upper tape */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-sky-500/20 blur-3xl transform -skew-y-6" />
        <div className="bg-gradient-to-r from-emerald-400 to-sky-500 -rotate-3 shadow-lg">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-6 py-4 animate-move-left [animation-duration:40s]">
              {[...new Array(2)].map((_, index) => (
                <Fragment key={index}>
                  {words.map((word) => (
                    <div
                      key={word}
                      className="inline-flex gap-4 items-center group transition-transform hover:scale-110"
                    >
                      <span className="text-white uppercase font-black text-lg tracking-wider">
                        {word}
                      </span>
                      <StarIcon className="size-5 text-white/80 group-hover:rotate-45 transition-transform" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lower tape - moving in opposite direction */}
      <div className="relative mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-400/20 blur-3xl transform skew-y-6" />
        <div className="bg-gradient-to-r from-sky-500 to-emerald-400 rotate-3 shadow-lg">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-6 py-4 animate-move-right [animation-duration:40s]">
              {[...new Array(2)].map((_, index) => (
                <Fragment key={index}>
                  {words.reverse().map((word) => (
                    <div
                      key={word}
                      className="inline-flex gap-4 items-center group transition-transform hover:scale-110"
                    >
                      <StarIcon className="size-5 text-white/80 group-hover:rotate-45 transition-transform" />
                      <span className="text-white uppercase font-black text-lg tracking-wider">
                        {word}
                      </span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

            <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-sky-500/20 blur-3xl transform -skew-y-6" />
        <div className="bg-gradient-to-r from-emerald-400 to-sky-500 -rotate-3 shadow-lg">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-6 py-4 animate-move-left [animation-duration:40s]">
              {[...new Array(2)].map((_, index) => (
                <Fragment key={index}>
                  {words.map((word) => (
                    <div
                      key={word}
                      className="inline-flex gap-4 items-center group transition-transform hover:scale-110"
                    >
                      <span className="text-white uppercase font-black text-lg tracking-wider">
                        {word}
                      </span>
                      <StarIcon className="size-5 text-white/80 group-hover:rotate-45 transition-transform" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
