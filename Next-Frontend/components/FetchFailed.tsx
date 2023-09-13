"use client";
import React from "react";
import { BiError } from "react-icons/bi";
type Props = {};

function FetchFailed({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-slate-900 text-white p-4  rounded-lg">
      <BiError color="red" size={50} />
      <div className=" text-center font-mono text-lg">
        <p>Request Failed!</p>
        check internet connection.
      </div>
      <div className=" text-sm font-serif text-center">
        refresh the page to try again.
      </div>
    </div>
  );
}

export default FetchFailed;
