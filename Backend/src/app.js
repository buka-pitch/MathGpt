import env, {
    config
} from "dotenv";
import axios from "axios";
import Express from "express";
import cors from "cors";

import helmet from "helmet";
import AiRoute from "./route/ai.route.js";
import QuestionRoute from "./route/questions.route.js";
import NoteRoutes from "./route/notes.route.js";
import {
    prisma
} from "./config/PrismaInstance.js";

env.config();

const app = Express();

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


app.use("/api/ai/", AiRoute);
app.use("/api/question", QuestionRoute);
app.use("/api/notes", NoteRoutes);

app.use((error, req, res, next) => {
    if (error) {
        if (error.errors) {
            const validationErrors = {};
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

export default app;