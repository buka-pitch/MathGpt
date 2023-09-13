"use client";

import React from "react";
import api from "@/Config/ApiConfig";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { sample } from "@/Constants/Sample";
import Link from "next/link";
import Image from "next/image";
type Props = {};

export const ListViewCard = ({ Title, Category, description }: any) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col justify-between items-center  rounded-lg w-full min-h-[100px] h-max bg-white shadow-lg shadow-orange-400 cursor-pointer  transition-all ease-in-out delay-0 "
      >
        <div className="flex-grow  max-md:w-[400px] w-[800px] text-sm font-mono font-bold text-orange-500 bg-slate-900 p-4 rounded-lg h-[80px] overflow-hidden relative">
          {parse(Title)}
          <div className="flex-grow max-md:w-full w-[800px] flex flex-col justify-center items-center ">
            <div className="absolute bottom-0 right-0 bg-white font-mono p-2 text-red-600 z-999 text-sm">
              {Category}
            </div>
          </div>
          <p className=" text-slate-400 text-sm ">
            {description && parse(description)}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export const FeaturedCard = ({ Title, Category }: any) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col justify-between items-center  rounded-lg w-[200px] h-[200px] bg-white shadow-lg shadow-orange-400 cursor-pointer hover:-translate-y-2 transition-all ease-in-out delay-0 "
      >
        <div className=" text-sm font-mono font-bold text-orange-500 bg-slate-900 p-4 rounded-lg w-full h-[75%]">
          {parse(Title)}
        </div>
        <div className="text-lg font-mono p-2">{Category}</div>
      </motion.div>
    </div>
  );
};

export const FeaturedQuestions = (props: Props) => {
  const [featured, setFeatured] = useState<any>([]);

  useEffect(() => {
    let Fetch = async () => {
      const featuredProblems = await api.get("/api/question/featured_problems");
      const data = await featuredProblems.data;
      setFeatured(data.featured);
      return data;
    };
    Fetch();
  }, []);
  return (
    <div className="flex flex-col w-full overflow-x-scroll flex-wrap scroll-x-none ">
      <div
        // initial={{ x: "50vw" }}
        // animate={{ x: 0, animationDuration: "5s" }}
        // transition={{
        //   ease: "easeIn",
        //   duration: 5,
        // }}
        className="flex flex-row gap-4 p-2  w-full justify-start items-center h-[300px]  "
      >
        {featured ? (
          featured.map((item: any) => {
            return (
              <div>
                <Link href={`/${item.category.title}/${item.id}`} passHref>
                  <FeaturedCard
                    Title={item.title}
                    Category={item.category.title}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <div className="flex flex-row justify-center items-center w-full">
            <Image src="/loading.svg" width={100} height={100} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
