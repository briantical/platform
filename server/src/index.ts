import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
	res.json({ data: "Platform Running !!!" });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
