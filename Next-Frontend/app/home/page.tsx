"use client";
import Image from "next/image";
import React, { PropsWithChildren, ReactChildren } from "react";
import { Carousel, ScrollingCarousel } from "react-carousel-rtl";
import { Item } from "react-carousel-rtl/dist/types/types/carousel";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  return (
    <div className=" min-h-[65vh] w-full">
      <div className=" w-full ">
        <div className="w-full relative">
          <Image
            src="/board.jpg"
            alt=""
            width={500}
            height={500}
            className="w-[100vw] max-h-[80vh]"
          />

          <div className="absolute top-0 right-0 flex flex-row justify-center items-center max-md:flex-col text-white font-bold z-50 w-full h-full p-10">
            <div className="absolute  opacity-50 right-0  bottom-0 bg-black  w-[50%] h-full -z-10  max-md:opacity-0"></div>
            <div className="flex-1 flex justify-center items-center"></div>
            <div className="flex-1 w-full flex flex-col justify-center items-center">
              <div className="flex flex-row p-4 border-2 border-orange-500 max-md:border-none sm:m-10">
                <h1 className=" font-bold text-2xl text-orange-400">Math</h1>
                <h1 className="text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 ">
                  Gpt
                </h1>
              </div>
              <p className="text-justify text-sm font-mono m-4">
                MathGpt is an AI-powered math learning platform that helps
                students of all levels understand and master math concepts.
              </p>
              <button
                className="p-4 rounded-full bg-orange-600 mt-5 hover:border-orange-600 max-md:w-full w-[50%] animate-pulse"
                onClick={() => {
                  router.replace("/");
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className=" font-bold text-lg pt-10 px-10 ">Features</h2>
      <div className="flex flex-col justify-center items-center w-full h-full gap-40">
        <div className="flex flex-row max-md:flex-col p-4 justify-center items-center w-full">
          <div className="flex-1 p-4 text-black">
            <h2 className=" text-lg font-bold ">Math problems </h2>
            <p className="sm:text-justify  sm:w-[50%]">
              Category Based Math problems to Develop problem solving skills
            </p>
            <p className="sm:text-justify sm:w-[50%]">
              math prolems on Mathgpt helps to test your skill and learn advance
              concepts with explanation and detail Notes
            </p>
          </div>
          <Image src="/board.jpg" alt="" width={500} height={500} />
        </div>
        <div className="flex flex-row max-md:flex-col p-4 justify-center items-center   ">
          <div className="flex-1 p-4 text-black">
            <h2 className=" text-lg font-bold ">Ai Generated Notes </h2>
            <p className=" ">
              Category Based Ai Generated Notes and detail Reference
            </p>
            <p className="sm:text-justify ">
              Generated Notes Can help you learn and solve the problems
            </p>
          </div>
          <Image src="/note.png" alt="" width={500} height={500} />
        </div>
        <div className="flex flex-row max-md:flex-col p-4 justify-center items-center   ">
          <div className="flex-1 p-4 text-black">
            <h2 className=" sm:text-lg font-bold ">Direct Ai Assistant </h2>
            <p className="sm:text-justify sm:w-[50%]">
              You can use the AI for chat or ask any Question or help you solve
              any problems.
            </p>
          </div>
          <Image src="/chat.png" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Home;
