"use client";
import api from "../../../Config/ApiConfig";
import React, { useEffect, useState } from "react";
import parser from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FeaturedCard } from "../../../components/FeaturedQuestions/FeaturedQuestions";

import Link from "next/link";
type NoteType = {
  id: string;
  title: string;
  note: string;
};

type CategoryType = {
  id: string,
  title: string
}

type QuestionType = {
  id: string,
  title: string,
  category: CategoryType,
  problem: string,

}


const page = ({ params }: { params: { noteTitle: string } }) => {
  const [noteData, setNoteData] = useState<NoteType>();
  const [questions, setQuestions] = useState<QuestionType[]>();
  useEffect(() => {
    let fetchNote = async () => {
      let res = await api.get("/api/notes/" + params.noteTitle);

      setNoteData(res.data.note);
      console.log(res.data);
      return res.data.note;
    };
    fetchNote();
  }, []);

  useEffect(() => {
    let fetcher = async () => {
      try {
        const question = await api.get("/api/question/question");
        console.log(await question.data);
        setQuestions(question.data.question);
        return question.data;
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    fetcher();
  }, []);
  return (
    <div className=" min-h-[65vh] ">
      <div className="flex flex-row justify-center items-start w-full p-2">
        {noteData ? (
          <div className="flex-2 flex flex-col justify-start items-center  p-2 overflow-scroll h-screen">
            <div className="h-[100px] text-orange-400 text-3xl">
              {noteData.title}
            </div>
            <div className="flex flex-col justify-start items-start w-[70vw] p-2 text-justify font-serif  gap-2">
              {noteData.note.includes("<html>")
                ? noteData.note
                  .replaceAll("<html>", "")
                  .replaceAll("</html>", "")
                  .replaceAll("<body>", "")
                  .replaceAll("</body>", "")
                  .replaceAll("<head>", "")
                  .replaceAll("</head>", "")

                  .split("</p>")
                  .map((item, index) => (
                    <div key={index}>
                      <div className="mb-2 text-lg">{parser(item)}</div>
                    </div>
                  ))
                : parser(noteData.note)}
            </div>
          </div>
        ) : (
          "no data"
        )}
        <div className="flex-1  flex flex-col justify-start items-center overflow-scroll gap-4 h-screen m-4">
          {questions &&
            questions.map((item, index) => (
              <Link href={`/${item.category.title}/${item.id}`} passHref>
                <FeaturedCard
                  Title={item.title}
                  Category={item.category.title}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
