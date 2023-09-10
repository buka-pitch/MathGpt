import React from "react";

function Fotter() {
  return (
    <div className="flex flex-row min-h-[30vh] w-full bg-slate-900 border-t-2 border-orange-500 shadow-md shadow-orange-500 relative">
      <div className="absolute top-0 border-b-2 border-orange-600 shadow-sm shadow-orange-500 p-2 w-full flex items-center justify-between text-slate-300 font-serif text-lg">
        <div className="flex flex-row pl-4">
          <h1 className=" font-bold text-2xl text-orange-400">Math</h1>
          <h1 className="text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 cursor-pointer">
            Gpt
          </h1>
        </div>
        <h1 className="pr-4">Powered by PALM AI</h1>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center max-md:items-start mt-12 w-full p-4">
        <div className="flex-1 text-slate-400 text-sm">
          <div>
            MathGpt is an AI-powered math learning platform that helps students
            of all levels understand and master math concepts.
          </div>
        </div>
        <div className="flex-1">
          <div className=" text-slate-400 text-sm">
            <div>
              offers a variety of interactive exercises and activities that
              allow students to learn at their own pace and in a way that is
              most engaging for them.
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className=" text-slate-400 text-sm">
            Note : Some calculation or answers might not be 100% correct.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
