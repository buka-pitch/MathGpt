import axios from "axios";

const BaseUrl = "https://free-space.tech";
export default axios.create({ baseURL: BaseUrl });

