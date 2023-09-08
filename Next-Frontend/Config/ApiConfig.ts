import axios from "axios";

const BaseUrl = "http://free-space.tech:5000";
export default axios.create({ baseURL: BaseUrl });

