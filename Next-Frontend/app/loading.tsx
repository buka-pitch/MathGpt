import Image from "next/image";
import React from "react";

function loading() {
  return (
    <div className=" min-h-[65vh] flex flex-col justify-center items-center bg-white">
      <Image
        src="/loading.gif"
        alt="loading"
        width={500}
        height={500}
        // className="h-[40vh]"
      />
      <h1>Loading Your Request ...</h1>
    </div>
  );
}

export default loading;
