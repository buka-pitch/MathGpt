"use client";
import api from "@/Config/ApiConfig";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { BiBlock, BiMessage, BiSend, BiX } from "react-icons/bi";

type Props = {};

type chatType = {
  from: string;
  message: string;
};

function ChatBox() {
  const chatRef = useRef();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const focusRef = useRef(null);
  const [textBox, setTextBox] = useState("");
  let [chatHistory, setChatHistory] = useState<chatType[]>([
    {
      from: "Ai",
      message: "hey there! what can i help?",
    },
  ]);

  useEffect(() => {
    focusRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let text = textBox;
    setTextBox("");

    setIsLoading(true);
    setChatHistory((prev) => [...prev, { from: "you", message: textBox }]);
    let res = await api.get("/api/ai/prompt/" + text);
    let ai = await res.data;

    setChatHistory((prev) => [...prev, { from: "Ai", message: ai?.data }]);
    setIsLoading(false);
  };
  return (
    <div
      id="Ai"
      className="flex flex-col w-[400px] h-[500px] bg-slate-300 justify-center items-center relative rounded-lg shadow-md shadow-cyan-500 overflow-hidden text-black
    "
    >
      <p className="absolute top-4 border-b-2 border-cyan-400 bg-white p-2 rounded-lg">
        <div className="flex flex-row pl-2">
          <h1 className=" font-bold text-2xl text-orange-400">Math</h1>
          <h1 className="text-black font-extrabold text-2xl bg-orange-500 rounded-lg px-1 ">
            Gpt
          </h1>
        </div>
      </p>
      <div className="h-[90%]  w-full pt-20  flex flex-col justify-start items-start gap-2 p-4 overflow-scroll object-contain">
        {chatHistory &&
          chatHistory.map((chat, index) => {
            if (chat.from === "you")
              return (
                <div
                  key={index}
                  className=" right-2 flex flex-col justify-center items-center bg-cyan-200 rounded-lg  p-4 m-1 max-w-full"
                >
                  <div className="">
                    <div className="text-xs text-orange-500">{chat.from}</div>
                    <div>{chat.message}</div>
                  </div>
                </div>
              );
            if (chat.from === "Ai")
              return (
                <div
                  key={index}
                  className=" left-2 flex flex-col justify-center items-center bg-white rounded-lg  p-3 m-1  max-w-full"
                >
                  <div className=" ">
                    <div className=" text-xs text-orange-600 ">{chat.from}</div>
                    <p className=" text-justify max-w-[400px]">
                      {chat.message}
                    </p>
                  </div>
                </div>
              );
          })}
        <div ref={focusRef}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="absolute bottom-0 w-full flex flex-row justify-center items-center"
      >
        <input
          type="text"
          className="flex-grow h-[50px] bg-white hover:outline-none p-2 outline-none"
          placeholder="Ask Mathgpt Ai"
          value={textBox}
          onChange={(e) => {
            setTextBox(e.target.value);
          }}
          required
        />
        {isLoading ? (
          <button
            type="submit"
            className="flex-1 p-2 bg-green-500 h-[50px] w-[30px] flex justify-center items-center"
            disabled={true}
          >
            <BiBlock size={25} />
          </button>
        ) : (
          <button
            type="submit"
            className="flex-1 p-2 bg-green-500 h-[50px] w-[30px] flex justify-center items-center"
          >
            <BiSend size={25} />
          </button>
        )}
      </form>
    </div>
  );
}

export function FloatingAiChat({}: Props) {
  const [chatOpened, setChatOpened] = useState<boolean>(false);

  return (
    <div
      className={`fixed right-0  bottom-2  p-2 z-[900] flex flex-col justify-center items-center gap-4`}
    >
      <p className="bg-white rounded-lg p-2 text-black font-semibold">
        Ask MatGpt Ai
      </p>
      <div
        className="flex flex-row justify-center items-center bg-cyan-400 w-[50px] h-[50px] rounded-full p-2 shadow-md shadow-orange-400 animate-pulse cursor-pointer hover:bg-cyan-500 hover:m-2"
        onClick={() => {
          setChatOpened((prev) => !prev);
        }}
      >
        {chatOpened ? (
          <div className="">
            <BiX title="close chat box" />
          </div>
        ) : (
          <div className="">
            <BiMessage title="Ask MathGpt Ai" size={30} />
          </div>
        )}
      </div>
      {chatOpened && <ChatBox />}
    </div>
  );
}
