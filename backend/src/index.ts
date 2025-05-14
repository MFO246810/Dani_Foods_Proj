import express from "express";
import cors from 'cors';
import path from 'path';
import { Request, Response } from "express"; 
import { config } from "dotenv";
import { healthRouter } from "./routes/health.route";
import allUsers from "./routes/user.route";

config(); // loads .env
const app = express();
const frontendPath = path.join(__dirname, "../../frontend/dist");

app.use(express.json());
app.use(cors());
app.use("/health", healthRouter);
app.use("/user", allUsers);
//app.use(express.static(frontendPath));

//Example Api Test

app.get('/', (req: Request, res: Response) => {
  res.send('Hello This is the backend')
});

app.get('/Api_test', (req: Request, res: Response) => {
  res.send('Worked')
});

// Serving the react files 
//app.get('*', (req, res) => {
//  res.sendFile(path.join(frontendPath, "index.html"));
//});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API → http://localhost:${PORT}`));
