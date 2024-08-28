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
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string | number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string | number;
}>) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={twMerge(shouldOrbit === true && "animate-spin")}
          style={{
            animationDuration: `${orbitDuration}s`,
          }}
        >
          <div
            className="flex items-start justify-start"
            style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div
              className={twMerge(shouldSpin === true && "animate-spin")}
              style={{
                animationDuration: `${spinDuration}s`,
              }}
            >
              <div
                className="inline-flex"
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
