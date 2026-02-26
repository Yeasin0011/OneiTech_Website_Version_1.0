"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  const isContact = item === "Contact";
  const hoverClass = isContact ? "" : "hover:opacity-[0.9]";
  
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      {href ? (
        <Link href={href}>
          <motion.p
            transition={{ duration: 0.3 }}
            className={`cursor-pointer ${hoverClass} text-white`}
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className={`cursor-pointer ${hoverClass} text-white`}
        >
          {item}
        </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.6rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#020817] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border bg-[#020817] border-white/[0.2] shadow-input flex justify-between items-center space-x-4 px-8 py-3 "
    >
       <Link href="/">
        <Image 
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          layout="responsive"
          className="max-w-[5rem] cursor-pointer"
        />
       </Link>
      <div className="flex gap-4">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-neutral-500 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 hover:text-neutral-500 transition-all duration-300"
    >
      {children}
    </Link>
  );
};
