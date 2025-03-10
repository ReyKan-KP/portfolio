import React from "react";
import { motion } from "framer-motion";
import './SVGLoader.css'; // Import the CSS file
import { AnimatedGradient } from "@components/ui/animated-gradient";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const SVGLoader = () => {
  return (
    <div className="svg-container">
              {/* Fixed background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 -z-10" />
        
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-5">
          <AnimatedGradient />
        </div>
      <motion.svg
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="300"
          cy="300"
          r="280"
          stroke="url(#gradient)"
          strokeWidth="40"
          fill="none"
          variants={draw}
          custom={1}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 269 247"
          preserveAspectRatio="xMidYMid"
          style={{
            display: "block",
            shapeRendering: "auto",
            background: "transparent",
            "--darkreader-inline-bgcolor": "#252626",
            "--darkreader-inline-bgimage": "none",
          }}
          width="100%"
          height="100%"
          data-darkreader-inline-bgcolor=""
          data-darkreader-inline-bgimage=""
        >
          <style type="text/css">
            {`
              .ld-text text {
                text-anchor: middle;
                dominant-baseline: middle;
                font-size: 78px;
                opacity: 0;
                user-select: none;
                pointer-events: none;
              }
            `}
          </style>
          <g
            style={{
              transformOrigin: "134.5px 123.5px",
              transform: "scale(2.3)",
            }}
            className="ld-text"
          >
            <g transform="translate(134.5,123.5)">
              <g transform="scale(0.9750) translate(0,-3)">
                <g
                  className="path"
                  style={{
                    opacity: 0,
                    transformOrigin: "-17.08px 0.02px 0px",
                    transform:
                      "matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1)",
                    animation: "2.7027s linear forwards animate-85y9wlp89dh",
                    transformBox: "view-box",
                  }}
                >
                  <path
                    d="M24.48 6.92Q26.56 4.28 28.68 2Q30.80-0.28 32.16-0.84Q33.52-1.40 37.68-1.40Q41.84-1.40 41.84-0.36L41.84-0.36Q41.84 0.04 40.96 0.52Q40.08 1 38.56 2.04Q37.04 3.08 32.20 7.72Q27.36 12.36 22.48 18.60L22.48 18.60Q22.32 18.76 22.32 19.04Q22.32 19.32 22.76 19.40Q23.20 19.48 24 19.64Q24.80 19.80 26.92 20.88Q29.04 21.96 30.72 23.60Q32.40 25.24 33.96 28.64Q35.52 32.04 35.76 35.04Q36 38.04 36.24 40.44Q36.48 42.84 37.48 47.32Q38.48 51.80 39.84 52.68L39.84 52.68Q40.24 53 40.24 53.48L40.24 53.48Q40.24 54.76 36.72 55.84Q33.20 56.92 30.44 56.92Q27.68 56.92 27.28 54.68L27.28 54.68Q26.88 52.28 26.72 43.24L26.72 43.24L26.72 40.04Q26.72 31.64 24.32 27.88L24.32 27.88Q22.24 24.60 20.56 24.20L20.56 24.20Q19.28 23.80 19.20 23.80L19.20 23.80L18.32 24.20Q16.40 26.44 15.28 28.52Q14.16 30.60 14.08 31.56L14.08 31.56L13.92 32.60Q13.92 43.88 14.88 51.88L14.88 51.88Q15.04 52.84 15.04 53L15.04 53Q15.04 54.76 11.32 56.04Q7.60 57.32 5.24 57.32Q2.88 57.32 2.88 56.60L2.88 56.60Q2.88 56.12 3.12 55.40L3.12 55.40Q3.92 53.64 4.28 43.76Q4.64 33.88 4.64 25.76Q4.64 17.64 4.32 12.60L4.32 12.60Q3.84 5 2.72 3.48L2.72 3.48Q1.84 2.36 1.84 2.04L1.84 2.04Q1.84 0.92 5.96-0.12Q10.08-1.16 12.60-1.16Q15.12-1.16 15.12-0.04L15.12-0.04L15.04 1Q14 9.64 14 19.48L14 19.48Q14 20.28 14.36 20.28Q14.72 20.28 15.20 19.56Q15.68 18.84 16.60 17.56Q17.52 16.28 19.96 12.92Q22.40 9.56 24.48 6.92"
                    style={{ fill: "rgba(221,122,255,1)" }}
                    transform="translate(-38.920,-27.940)"
                  ></path>
                </g>
                <g
                  className="path"
                  style={{
                    opacity: 0,
                    transformOrigin: "21.76px -0.02px 0px",
                    transform:
                      "matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1)",
                    animation:
                      "2.7027s linear 1.2973s forwards animate-85y9wlp89dh",
                    transformBox: "view-box",
                  }}
                >
                  <path
                    d="M60.16 22.36L60.16 22.36Q60.48 22.36 61.36 23Q62.24 23.64 63.20 23.64L63.20 23.64L63.28 23.64Q66 23.64 67.60 21.48Q69.20 19.32 69.36 17.16L69.36 17.16L69.60 15Q69.60 11.96 68.68 9.76Q67.76 7.56 66.56 6.48Q65.36 5.40 63.76 4.84L63.76 4.84Q61.76 4.04 59.56 4.04Q57.36 4.04 56 4.48Q54.64 4.92 54.48 5.32L54.48 5.32L54.40 5.80Q53.68 16.60 53.68 25.12Q53.68 33.64 53.96 39.80Q54.24 45.96 54.52 49.28Q54.80 52.60 54.80 52.92L54.80 52.92Q54.80 54.92 51.28 56.12Q47.76 57.32 44.32 57.32L44.32 57.32Q42.72 57.32 42.72 56.52L42.72 56.52Q42.72 56.28 42.96 55.40L42.96 55.40Q44.48 51.88 44.48 22.68L44.48 22.68Q44.48 5.48 42.16 3L42.16 3Q41.68 2.52 41.68 2Q41.68 1.48 42.84 0.84Q44 0.20 49.36-0.64Q54.72-1.48 60.72-1.48L60.72-1.48Q70.16-1.48 74.92 3.64Q79.68 8.76 79.68 15.84Q79.68 22.92 75.80 28.12Q71.92 33.32 65.68 33.32L65.68 33.32Q63.68 33.32 61.68 32.60L61.68 32.60Q57.68 31.16 57.68 26.60L57.68 26.60Q57.68 25.64 58.32 24Q58.96 22.36 60.16 22.36"
                    style={{ fill: "rgba(221,122,255,1)" }}
                    transform="translate(-38.920,-27.940)"
                  ></path>
                </g>
              </g>
              <text
                dy="0.35em"
                fill="rgba(221,122,255,1)"
                fontFamily="Aladin"
                fontSize="78"
              >
                Kanishaka Pranjal
              </text>
            </g>
          </g>
          <style type="text/css">
            {`
              @keyframes animate-85y9wlp89dh {
                0.00% {
                  animation-timing-function: cubic-bezier(0.67,0.66,0.34,0.33);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.00, 0.00) skew(0deg, 0.00deg);
                  opacity: 0.00;
                }
                4.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.31, 0.31);
                  opacity: 0.40;
                }
                6.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.44, 0.44);
                  opacity: 0.60;
                }
                8.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.56, 0.56);
                  opacity: 0.80;
                }
                10.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.68, 0.68);
                  opacity: 1.00;
                }
                14.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.88, 0.88);
                  opacity: 1.00;
                }
                18.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.03, 1.03);
                  opacity: 1.00;
                }
                22.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.10, 1.10);
                  opacity: 1.00;
                }
                24.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.11, 1.11);
                  opacity: 1.00;
                }
                28.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.09, 1.09);
                  opacity: 1.00;
                }
                32.00% {
                  animation-timing-function: cubic-bezier(0.67,0.66,0.34,0.33);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.02, 1.02);
                  opacity: 1.00;
                }
                36.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.94, 0.94);
                  opacity: 1.00;
                }
                40.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.86, 0.86);
                  opacity: 1.00;
                }
                44.00% {
                  animation-timing-function: cubic-bezier(0.59,0.98,0.19,0.73);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.81, 0.81);
                  opacity: 1.00;
                }
                48.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.80, 0.80);
                  opacity: 1.00;
                }
                52.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.82, 0.82);
                  opacity: 1.00;
                }
                56.00% {
                  animation-timing-function: cubic-bezier(0.67,0.66,0.34,0.33);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.86, 0.86);
                  opacity: 1.00;
                }
                60.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.92, 0.92);
                  opacity: 1.00;
                }
                64.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.97, 0.97);
                  opacity: 1.00;
                }
                68.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.01, 1.01);
                  opacity: 1.00;
                }
                72.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.03, 1.03);
                  opacity: 1.00;
                }
                74.00% {
                  animation-timing-function: cubic-bezier(0.74,0.45,0.39,0.15);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.03, 1.03);
                  opacity: 1.00;
                }
                80.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.01, 1.01);
                  opacity: 1.00;
                }
                82.00% {
                  animation-timing-function: cubic-bezier(0.65,0.70,0.32,0.37);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.01, 1.01);
                  opacity: 1.00;
                }
                88.00% {
                  animation-timing-function: cubic-bezier(0.58,1.06,0.16,0.84);
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.99, 0.99);
                  opacity: 1.00;
                }
                92.00% {
                transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.98, 0.98);
                  opacity: 1.00;
                }
                96.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(0.99, 0.99);
                  opacity: 1.00;
                }
                100.00% {
                  transform: translate(0.00px,0.00px) rotate(0.00deg) scale(1.00, 1.00);
                  opacity: 1.00;
                }
              }
            `}
          </style>
        </svg>
      </motion.svg>
    </div>
  );
};

export default SVGLoader;
