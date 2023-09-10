"use client";
import api from "../../../Config/ApiConfig";
import React, { useEffect, useState } from "react";
import parser from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactMarkdown from "markdown-to-jsx";
import { FeaturedCard } from "../../../components/FeaturedQuestions/FeaturedQuestions";

import Link from "next/link";
import Image from "next/image";
import { NotesType } from "@/components/ProblemsListView/ProblemListView";
type NoteType = {
  id: string;
  title: string;
  note: string;
};

type CategoryType = {
  id: string;
  title: string;
};

type QuestionType = {
  id: string;
  title: string;
  category: CategoryType;
  problem: string;
};

const page = ({ params }: { params: { noteTitle: string } }) => {
  const [noteData, setNoteData] = useState<NoteType>();
  const [notes, setNotes] = useState<NotesType[]>();

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
    let notesFetcher = async () => {
      try {
        let note = (await api.get("/api/notes/")).data;
        setNotes(note.notes);
        return note;
      } catch (error) {
        console.log(error);
      }
    };
    notesFetcher();
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
  const MyParagraph = ({ children, ...props }: { children: any }) => (
    <div className=" text-lg" {...props}>
      {children}
    </div>
  );
  return (
    <div className=" min-h-[65vh] ">
      <div className="flex flex-row max-md:flex-col justify-center items-start max-md:ite w-full p-2">
        {noteData ? (
          <div className="flex-2 flex flex-col justify-start items-center  p-2 overflow-scroll h-screen max-md:w-full">
            <div className="h-[100px] text-orange-400 text-3xl">
              {noteData.title}
            </div>
            <div className="flex flex-col justify-start items-start max-md:w-full w-[70vw] p-2 text-justify font-serif  gap-2">
              {noteData.note.includes("<html>") ? (
                noteData.note
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
              ) : (
                <ReactMarkdown
                  options={{
                    overrides: {
                      p: {
                        component: MyParagraph,
                        props: {
                          className: " text-lg",
                        },
                      },
                      li: {
                        component: MyParagraph,
                        props: {
                          className: " text-lg",
                        },
                      },
                    },
                  }}
                >
                  {noteData.note}
                </ReactMarkdown>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full m-4 ">
            <Image
              src="/loading.gif"
              alt=""
              width={400}
              height={400}
              className="w-[50%] "
            />
            <p>Loading Your request ...</p>
          </div>
        )}
        <div className="flex-1  flex flex-col max-md:flex-row justify-start items-center overflow-scroll gap-4 h-screen m-4 w-full">
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
