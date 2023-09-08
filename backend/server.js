import env, {
    config
} from "dotenv";
import axios from "axios";
import Express from "express";
import AiRoute from "./route/ai.route.js";
import QuestionRoute from "./route/questions.route.js";
import NoteRoutes from "./route/notes.route.js";
import expressSession from "express-session";
import cors from "cors";
import {
    PrismaSessionStore
} from "@quixo3/prisma-session-store";
import {
    prisma
} from "./config/PrismaInstance.js";
import helmet from "helmet";

env.config();

const app = Express();
const PORT = process.env.PORT | 5000;
app.use(Express.json());
// app.use(Express.urlencoded());
app.use(
    cors({
        origin: "*",
    })
);
app.use(
  helmet({
    noSniff: true,
    xssFilter: true,
    permittedCrossDomainPolicies: true,
  })
);
app.use(
    expressSession({
        cookie: {
            maxAge: 60 * 1000, // ms
        },
        secret: "a santa at nasa",
        resave: true,
        saveUninitialized: true,
        store: new PrismaSessionStore(prisma, {
            checkPeriod: 60 * 1000, //ms
            dbRecordIdIsSessionId: true,
        }),
    })
);

app.use("/api/ai/", AiRoute);
app.use("/api/question", QuestionRoute);
app.use("/api/notes", NoteRoutes);

app.use((error, req, res, next) => {
    if (error) {
        if (error.errors) {
            let validationErrors = {};
            error.errors.forEach((element, index) => {
                validationErrors[index] = element;
            });

            return res.status(error.statusCode || 500).json({
                status: "failed",
                message: validationErrors,
            });
        }

        error.stack = "";
        console.log(error);
        return res.status(error.statusCode || 500).json({
            status: "failed",
            message: error.message || "Something Went Wrong!",
        });
    }
});

app.listen(PORT, () => {
    console.log("server runing on https://localhost:" + PORT);
});