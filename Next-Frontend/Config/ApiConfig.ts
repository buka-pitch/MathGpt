import axios from "axios";

const BaseUrl = process.env.API_URL;
export default axios.create({ baseURL: BaseUrl });

