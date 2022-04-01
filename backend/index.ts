import app from "./src/left/app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
