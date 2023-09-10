import app from './app.js';
import env from "dotenv";
env.config()
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));