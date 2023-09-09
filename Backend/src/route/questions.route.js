import { Router } from "express";
import client, { MODEL_NAME } from "../config/AiConfig.js";
import { prisma } from "../config/PrismaInstance.js";
const router = Router();

// sample prompt
//"generate a calculus problem with its answer, calculation and explanation then your response should be in json each field using html"

router.route("/check_users_answer").post(async (req, res, next) => {
  try {
    if (
      req.body.calculation === null &&
      req.body.answer === null &&
      req.body.problem === null
    )
      throw new Error("problem, calculation and answer is required!");

    const question = await prisma.question
      .findUnique({
        where: {
          id: req.body.problem,
        },
      })
      .catch((error) => {
        throw error;
      });

    if (question === null) {
      throw new Error("question not found !");
    }

    const answer = question.answer;
    const usersAnswer = req.body.answer.replaceAll(" ", "");
    if (
      usersAnswer.replaceAll(" ", "") ===
      answer
        .replaceAll(" ", "")
        .replaceAll(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "")
    ) {
      return res.status(200).json({
        status: "success",
        isCorrect: true,
        answer,
      });
    }

    const answerarr = answer.split(" ");
    if (
      usersAnswer.length >= 2 &&
      answerarr.includes(usersAnswer.replaceAll(" ", ""))
    ) {
      return res.status(200).json({
        status: "success",
        isCorrect: true,
        answer,
      });
    } else {
      return res.status(200).json({
        status: "success",
        isCorrect: false,
      });
    }
  } catch (error) {
    return next(error);
  }
});
router.route("/get_categories").get((req, res, next) => {
  prisma.category
    .findMany({
      select: {
        title: true,
        id: true,
      },
    })
    .then((category) => {
      res.status(200).json({
        status: "success",
        category,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        status: "success",
        message: err.message,
      });
    });
});

router.route("/get_related/:questionId").get((req, res, next) => {
  prisma.question
    .findFirst({
      where: {
        id: req.params.questionId,
      },
      include: {
        category: true,
      },
    })
    .then((question) => {
      prisma.question
        .findMany({
          where: {
            categoryId: question.categoryId,
          },
          include: {
            category: true,
          },
          take: 5,
        })
        .then((questions) => {
          // remove the current question
          let qArray = questions.filter(
            (item) => item.id !== req.params.questionId
          );
          res.status(200).json({
            status: "success",
            questions: qArray,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            status: "success",
            message: err.message,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        status: "success",
        message: err.message,
      });
    });
});

router.route("/question").get((req, res, next) => {
  prisma.question
    .findMany({
      include: {
        category: true,
      },
    })
    .then((question) => {
      res.status(200).json({
        status: "success",
        question: question.reverse(),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        status: "success",
        message: err.message,
      });
    });

  router.route("/get_answer/:questionId").get((req, res, next) => {
    prisma.question
      .findUnique({
        where: {
          id: req.params.questionId,
        },
        include: {
          category: true,
        },
      })
      .then((question) => {
        return res.status(200).json({
          status: "success",
          question: question,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          status: "success",
          message: err.message,
        });
      });
  });
  router.route("/:questionId").get((req, res, next) => {
    prisma.question
      .findUnique({
        where: {
          id: req.params.questionId,
        },
        include: {
          category: true,
        },
      })
      .then((question) => {
        const { answer, explanation, ...questionData } = question;
        return res.status(200).json({
          status: "success",
          question: questionData,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          status: "success",
          message: err.message,
        });
      });
  });
});
router.route("/featured_problems").get(async (req, res, next) => {
  const featured = await prisma.question.findMany({
    where: {
      featured: true,
    },
    include: {
      category: true,
    },
  });
  console.log(featured);
  return res.status(200).json({
    status: "success",
    featured,
  });
});
router.route("/generate_question/:question_from").get((req, res, next) => {
  let format =
    "math  problem with its category, answer, calculation,  explanation and detailNote response should be in json each field using html also the json fields on your response must be category,problem,explanation,calculation.answer,detailNote. note that explanation must not contain answer.";
  if (req.params.question_from) {
    client
      .generateText({
        model: MODEL_NAME,
        prompt: {
          text: "generate a " + req.params.question_from + " " + format,
        },
      })
      .then(async (result) => {
        //TODO store question with prisma and pass the uid too and then for the answer request with uid of question to get the answer
        if (result) {
          console.log(result[0].candidates[0].output);
          let response = result[0].candidates[0].output
            .replaceAll("`", "")
            .replaceAll("json", "")
            .replaceAll("\n", "")
            .trim();
          let json = JSON.parse(response);

          let CategoryExists = await prisma.category.findFirst({
            where: {
              title: json.category,
            },
          });

          if (CategoryExists === null) {
            CategoryExists = await prisma.category.create({
              data: {
                title: json.category,
              },
            });
          }

          console.log(CategoryExists === null);
          console.log(CategoryExists.id && CategoryExists.id);
          // console.log(CategoryExists.id);
          let question = await prisma.question.create({
            data: {
              title: json.problem,
              explanation: json.explanation.toString() || null,
              calculation: json.calculation.toString() || null,
              answer: json.answer.toString() || null,
              detailNote: json.detailNote.toString() || null,
              categoryId: CategoryExists.id,
            },
          });

          return res.status(200).json({
            status: "success",
            response: json,
          });
        } else {
          return res.status(500).json({
            status: "failed",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          status: "failed",
          message: err.message,
        });
      });
  }

  // return res.json(response);
});

router.route("/generate_note/:about").get((req, res, next) => {
  let format = `i am a student trying to understand ${req.params.about},
  generate html formated note about ${req.params.about}, the note should be in detail,
  the note should explain all concepts about ${req.params.about},
  the note should have examples,have to follow grammer and writing rules,must be at least minimum of 500 lines.`;
  if (req.params.about) {
    client
      .generateText({
        model: MODEL_NAME,
        prompt: {
          text: format,
        },
      })
      .then(async (result) => {
        //TODO store question with prisma and pass the uid too and then for the answer request with uid of question to get the answer

        if (result) {
          console.log(result[0].candidates[0].output);
          let response = result[0].candidates[0].output.trim();

          const noteexists = await prisma.note.findFirst({
            where: {
              title: req.params.about,
            },
          });

          if (noteexists !== null)
            throw new Error("Note with this name already generated!");

          const newNote = await prisma.note
            .create({
              data: {
                title: req.params.about,
                note: result[0].candidates[0].output,
              },
            })
            .catch((error) => {
              return next(error);
            });

          return res.status(200).json({
            status: "success",
            response: response,
          });
        } else {
          return res.status(500).json({
            status: "failed",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          status: "failed",
          message: err.message,
        });
      });
  }

  // return res.json(response);
});
export default router;
