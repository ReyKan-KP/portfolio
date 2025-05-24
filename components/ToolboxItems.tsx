import React, { Fragment } from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
}: {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className={twMerge(
          "flex flex-none py-1.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 80,
            ease: "linear",
          },
        }}
      >
        {[...new Array(5)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item, itemIndex) => (
              <motion.div
                key={`${item.title}-${index}`}
                className="inline-flex items-center gap-4 py-2.5 px-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:bg-white/10 group"
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: itemIndex * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 25
                }}
                whileHover={{ 
                  rotate: Math.random() > 0.5 ? 1 : -1,
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                style={{
                  rotate: (itemIndex % 3 - 1) * 0.5,
                }}
              >
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-sky-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <TechIcon component={item.iconType} />
                </motion.div>
                <span className="font-semibold relative">
                  {item.title}
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-emerald-400/60 to-sky-500/60 w-0 group-hover:w-full"
                    transition={{ duration: 0.6 }}
                  />
                </span>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolboxItems;
