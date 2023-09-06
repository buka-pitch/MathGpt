import { v1beta2, TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import env from "dotenv";
env.config();

export const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.APIKEY;
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export default client;
