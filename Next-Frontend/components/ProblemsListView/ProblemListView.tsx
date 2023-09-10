"use client";

import React, { useEffect, useState } from "react";
import {
  FeaturedCard,
  ListViewCard,
} from "../FeaturedQuestions/FeaturedQuestions";
import Link from "next/link";
import api from "../../Config/ApiConfig";
import PaginatedView from "../../components/PaginatedView";
import Image from "next/image";
type Props = {};

export type NotesType = {
  title: string;
  note: string;
};

export function ProblemListView({}: Props) {
  const [problems, setProblems] = useState<object[]>();
  const [category, setCategory] = useState<any>();
  const [notes, setNotes] = useState<NotesType[]>();
  useEffect(() => {
    let fetcher = async () => {
      try {
        let res = (await api.get("/api/question/question")).data;
        setProblems(res.question);
        console.log(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };

    fetcher();
  }, []);
  useEffect(() => {
    let categoryFetcher = async () => {
      try {
        let res = (await api.get("/api/question/get_categories")).data;
        setCategory(res.category);
        console.log(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    categoryFetcher();
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
  return (
    <div
      id="questions"
      className="flex flex-row max-md:flex-col justify-start items-start w-full  min-h-screen p-4 gap-4 ax-md:justify-center max-md:items-center max-md:w-full"
    >
      <div className="flex-2 max-w-[300px] flex flex-col justify-center items-center h-full ">
        <div className="p-4 rounded-xl  bg-white w-full">
          <h3 className="p-2 text-sm text-start font-sans">Categories</h3>
          <div className="  m-2 p-2 rounded-lg flex flex-row flex-wrap justify-center items-center gap-4 overflow-hidden ">
            {category ? (
              category.map((item: any, index: any) => {
                return (
                  <div key={index} className=" shadow-md p-2 rounded-lg">
                    <p>{item.title}</p>
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
      </div>
      <div className="flex-2  w-full flex flex-col justify-center items-center shadow-md shadow-slate-500">
        <div className="p-4 rounded-xl  bg-white w-full">
          <h3>Problems</h3>

          {problems ? (
            <PaginatedView itemPerPage={6} items={problems} />
          ) : (
            <div className="flex flex-row justify-center items-center w-full">
              <Image src="/loading.svg" width={100} height={100} alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow max-md:w-full w-[800px] flex flex-col justify-center items-center ">
        <div className="p-4 rounded-xl  bg-white w-full h-full">
          <h3>Note And References</h3>
        </div>
        <div className="h-full w-full overflow-y-scroll">
          {notes ? (
            notes.map((item, index) => (
              <Link href={`/note/${item.title}`} className="w-full" passHref>
                <div
                  key={index}
                  className="flex flex-col w-full min-h-[60px] justify-center items-center p-2 m-2 bg-white rounded-md h-full cursor-pointer hover:shadow-lg hover:border-b-4 shadow-gray-600 border-b-2 border-orange-600 text-start"
                >
                  {item.title}
                </div>
              </Link>
            ))
          ) : (
            <div className="flex flex-row justify-center items-center w-full">
              <Image src="/loading.svg" width={100} height={100} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
