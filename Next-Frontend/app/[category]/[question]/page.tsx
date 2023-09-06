"use client";
import api from "../../../Config/ApiConfig";
import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { FeaturedCard } from "../../../components/FeaturedQuestions/FeaturedQuestions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfettiExplosion from "react-confetti-explosion";

const Question = ({
  params,
}: {
  params: { category: string; question: string };
}) => {
  const router = useRouter();
  const [question, setQuestion] = useState<any>();
  const [related, setRelated] = useState<any>();
  const [calculation, setCalculation] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [celebrate, setCelebrate] = useState<boolean>(false);

  useEffect(() => {
    let fetcher = async () => {
      try {
        const question = await api.get("/api/question/" + params.question);
        console.log(await question.data);
        setQuestion(question.data.question);
        return question.data;
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetcher();
  }, []);
  useEffect(() => {
    let related = async function getRealedProblems() {
      try {
        const res = await api.get(
          "/api/question/get_related/" + params.question
        );
        setRelated(res.data.questions);
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    related();
  }, []);

  async function getAnswer(e: any) {
    e.preventDefault();
    try {
      const answer = await api.get(
        "/api/question/get_answer/" + params.question.toString()
      );
      setQuestion(answer.data.question);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  async function submitHandler(e: any) {
    e.preventDefault();
    setIsSubmiting(true);
    try {
      const check_answer = await api.post("/api/question/check_users_answer/", {
        calculation,
        answer,
        problem: params.question,
      });
      const res = check_answer.data;
      if (res.isCorrect == true) {
        toast.success("Correct Answer. Good Job!\n");
        setCelebrate(true);
        getAnswer(e);
      } else {
        toast.error("Answer Not Correct");
      }
      toast.info(res.answer);
      setIsSubmiting(false);
    } catch (error: any) {
      setIsSubmiting(false);
      toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
    }
  }
  return (
    <div className="w-full h-full min-h-[65vh] gap-4">
      {celebrate && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={200}
          width={1600}
        />
      )}
      {question && (
        <div className="flex flex-row justify-center items-center w-full h-full gap-4 max-md:flex-col p-4">
          <div className=" flex-grow w-full p-6 m-2 bg-slate-900 rounded-lg shadow-md shadow-orange-500  relative">
            <div className="flex flex-col gap-6">
              <div className="absolute bottom-5 right-10">
                {!question.answer ? (
                  <button
                    className="bg-green-500 p-2 rounded-md hover:bg-green-700"
                    onClick={getAnswer}
                  >
                    Check Answer
                  </button>
                ) : (
                  <p className="text-sm text-green-600">
                    Solution powered by AI
                  </p>
                )}
              </div>
              <h1 className="text-orange-500 font-bold">
                {parse(question.title)}
              </h1>
              <p className="text-slate-400 font-serif text-justify">
                {parse(question.detailNote)}
              </p>
              <p className="text-yellow-500 font-serif">
                {question.explanation && parse(question.explanation)}
              </p>
              <p className="text-cyan-400 font-mono p-2">
                {question.answer &&
                  question?.calculation &&
                  parse(question.calculation)}
              </p>
              <p className="text-orange-600 font-extrabold text-start">
                {question.answer && <>Answer = {parse(question.answer)}</>}
              </p>
            </div>
          </div>
          {!question.answer && (
            <div className="flex-2 max-md:w-full sm:w-[50%]">
              <form onSubmit={submitHandler}>
                <textarea
                  name="answer"
                  id="answer"
                  cols={10}
                  rows={2}
                  className="w-full p-4 m-2 border-transparent outline-none hover:outline-none rounded-lg bg-slate-800 text-orange-400 font-extrabold"
                  spellCheck
                  placeholder=" Enter Your Answer"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                  value={answer}
                ></textarea>
                {isSubmiting ? (
                  <div className="flex flex-row justify-center items-center p-4 bg-grey-500 w-full m-2 rounded-lg shadow-md  shadow-orange-500  hover:shadow-sm hover:bg-orange-200">
                    <Image
                      src="/loadingcircle.gif"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="p-4 bg-orange-500 self-center w-full m-2 rounded-lg shadow-md  shadow-orange-500 hover:shadow-sm hover:bg-orange-200"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          )}
        </div>
      )}
      {question?.answer && (
        <>
          <p className="px-4 ">Related Problems</p>
          <div className="flex flex-row gap-4 px-2  w-full  justify-center items-center h-[300px] overflow-x-scroll max-md:items-center max-md:justify-start">
            {related.length === 0 ? (
              <div className="flex flex-col justify-center items-center p-4 text-orange-500 w-full gap-4">
                <h2 className=" font-serif">
                  sorry no other problems to solve in this Category
                </h2>
                <button
                  className="p-2 bg-orange-500 text-white  rounded-md hover:bg-orange-400 font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                >
                  Find other Math Problems
                </button>
              </div>
            ) : (
              related.map((item: any, index: any) => (
                <Link href={`/${item.category.title}/${item.id}`} passHref>
                  <FeaturedCard
                    Title={item.title}
                    Category={item.category.title}
                  />
                </Link>
              ))
            )}
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
export default Question;
