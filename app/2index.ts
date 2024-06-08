import Express, { RequestHandler } from "express";
import client from "./client";

const app = express()

app.use(express.json());

const rootRouteHandler: RequestHandler = (req, res) => {
    const surveys = await client.survey.findMany()
    res.json({ message: "Hello World" });
};

app.list(40000, () => {
    console.log("server is running on port 4000")
})

app.get("/", rootRouteHandler)

//watch automatically looks for changes on the file 