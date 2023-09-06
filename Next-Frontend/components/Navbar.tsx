"use client";
import { NavBarMenuContents } from "@/Constants/MenuContents";
import { useMediaQuery } from "@/Hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { use, useState } from "react";
import { BiMenu, BiMenuAltLeft, BiMenuAltRight, BiX } from "react-icons/bi";
function Navbar() {
  const [menuToggled, setMenuToggled] = useState(false);
  const mediaQuery = useMediaQuery();

  let isMobile = mediaQuery?.width && mediaQuery?.width;
  function ToggleMenu() {
    setMenuToggled((prev) => !prev);
  }
  return (
    <div className="flex flex-row items-center justify-between w-full h-full p-2 border-b-2 border-orange-400 shadow-md shadow-orange-300 bg-slate-900 ">
      <Link href="/">
        <div className="flex flex-row pl-2">
          <h1 className=" font-bold text-2xl text-orange-400">Math</h1>
          <h1 className="text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 ">
            Gpt
          </h1>
        </div>
      </Link>
      {isMobile < 640 && !menuToggled && (
        <div className="pr-2 cursor-pointer" onClick={ToggleMenu}>
          <BiMenuAltLeft color="gold" size="40" />
        </div>
      )}
      {isMobile < 640 && menuToggled && (
        <div className="pr-2 cursor-pointer" onClick={ToggleMenu}>
          <BiMenuAltRight color="gold" size="40" />
        </div>
      )}
      {isMobile > 640 && (
        <div className="flex flex-row gap-6">
          {NavBarMenuContents.map((item) => {
            if (item.title === "Login / Join") {
              return (
                <div key={item.title}>
                  <Link href={item.href} passHref>
                    <h1 className="text-black font-bold font-serif hover:bg-green-700 bg-green-500 rounded-lg p-2 absolute right-10 top-16 animate-bounce transition-all">
                      {item.title}
                    </h1>
                  </Link>
                </div>
              );
            }
            return (
              <div key={item.title}>
                <Link href={item.href} passHref>
                  <h1 className="text-orange-400 font-bold font-serif hover:text-yellow-400 ">
                    {item.title}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {menuToggled && (
        <motion.div
          initial={{ x: "100vw", y: "-50vh" }}
          animate={{ x: 0, y: 0, animationDuration: "5s" }}
          transition={{ type: "twin", stiffness: 50 }}
          className=" h-max w-full bg-slate-900 absolute top-10 right-10 p-4 border-2 border-yellow-300 shadow-lg shadow-orange-500 z-50 "
        >
          <div className="flex flex-col justify-center items-center w-full">
            {NavBarMenuContents.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-center items-center cursor-pointer w-full"
              >
                {/* <Link
                  href={item.href}
                  className="w-full flex flex-col justify-center items-center"
                > */}
                <motion.h1
                  initial={{ y: -500 }}
                  animate={{
                    y: 0,
                  }}
                  whileHover={{ backgroundColor: "ThreeDShadow" }}
                  transition={{ type: "tween", delay: 0.5 }}
                  className="p-4 hover:text-orange-500 font-extrabold text-2xl text-yellow-600 hover:text-3xl w-full text-center"
                >
                  {item.title}
                </motion.h1>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
