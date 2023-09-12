import Image from "next/image";
import { FeaturedQuestions } from "@/components/FeaturedQuestions/FeaturedQuestions";
import { ProblemListView } from "@/components/ProblemsListView/ProblemListView";
import { useEffect, useMemo, useState } from "react";
let headers = [
  "Algebra",
  "Linear Equation",
  "Exponents",
  "Quardratic Equation",
];

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-slate-200 text-black ">
      <div className="flex flex-row justify-start items-center bg-white w-full min-h-[200px] relative">
        <div className="flex-1 flex flex-row justify-between items-center bg-pattern w-full h-[200px] p-5">
          <div className=" bg-gray-900  bg-opacity-50 text-white font-semibold p-4 w-[70%] h-[70%] flex flex-col justify-center items-center rounded-md">
            MathGpt is an AI-powered math learning platform that helps students
            of all levels understand and master math concepts.
          </div>
          <div className="flex flex-row p-2">
            <h1 className=" font-bold text-2xl text-orange-400">Math</h1>
            <h1 className="text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 ">
              Gpt
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full text-2xl font-serif p-4 border-b-2 border-orange-600">
        Featured Math Problems
      </div>
      <FeaturedQuestions />
      <ProblemListView />
    </main>
  );
}
