import { Router } from "express";
import { v1beta2, TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import env from "dotenv";
env.config();

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.APIKEY;
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const router = Router();

router.route("/prompt/:prompt").get((req, res, next) => {
  if (req.params.prompt) {
    const { prompt } = req.params;
    client
      .generateText({
        model: MODEL_NAME,
        prompt: {
          text: prompt,
        },
      })
      .then((result) => {
        // let response = result;
        return res.status(200).json({
          status: "success",
          data: result[0].candidates[0].output,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(200).json({
          status: "failed",
          message: err.message,
        });
      });
  }
});

export default router;

// const api = await axios.post(`https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.APIKEY}`,
//   { "prompt": { "text": "ask me the harderst math problem" } }).then((data) => {
//     console.log(data.data.candidates[0].output)
//
//   }).catch((err) => { console.log(err) })
