import express from "express";
import router from "./routers/routers.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
    response.send("mio server");
});

app.use("/posts", router);

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});