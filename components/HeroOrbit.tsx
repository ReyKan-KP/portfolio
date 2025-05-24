import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
  reverseOrbit = false,
  reverseSpin = false,
  zIndex = 0,
  opacity = 1,
  className = "",
  responsive = false,
  pulsate = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string | number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string | number;
  reverseOrbit?: boolean;
  reverseSpin?: boolean;
  zIndex?: number;
  opacity?: number;
  className?: string;
  responsive?: boolean;
  pulsate?: boolean;
}>) => {
  return (
    <>
      <div 
        className={twMerge(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          className
        )}
        style={{ zIndex }}
      >
        <div
          className={twMerge(
            shouldOrbit === true && `animate-spin${reverseOrbit ? '-reverse' : ''}`,
            pulsate && "animate-pulse-slow"
          )}
          style={{
            animationDuration: `${orbitDuration}s`,
            animationTimingFunction: "linear",
            opacity,
          }}
        >
          <div
            className={responsive ? "flex items-start justify-start scale-[0.6] sm:scale-[0.8] md:scale-100" : "flex items-start justify-start"}
            style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotation}deg)`,
              transition: "all 0.5s ease-in-out",
            }}
          >
            <div
              className={twMerge(
                shouldSpin === true && `animate-spin${reverseSpin ? '-reverse' : ''}`
              )}
              style={{
                animationDuration: `${spinDuration}s`,
                animationTimingFunction: "ease-in-out",
              }}
            >
              <div
                className="inline-flex transition-transform duration-300"
                style={{ transform: `rotate(${rotation * -1}deg)` }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
