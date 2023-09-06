import axios from "axios";

const BaseUrl = process.env.API_URL || "http://localhost:5000";
export default axios.create({ baseURL: BaseUrl });
