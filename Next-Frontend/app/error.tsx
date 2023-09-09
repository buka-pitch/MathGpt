"use client";

import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <p className=" text-slate-900 font-semibold text-lg">
        {error.message} || Something Went Wrong!
      </p>
    </div>
  );
};

export default error;
