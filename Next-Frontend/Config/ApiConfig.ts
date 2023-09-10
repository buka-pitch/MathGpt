import axios from "axios";

const BaseUrl = "https://math-gpt-exgg.vercel.app";
export default axios.create({ baseURL: BaseUrl });

