import express from "express";
import cors from "cors";
import morgan from "morgan";
import downloadRouter from "./routes/download.js";
import infoRouter from "./routes/info.js";

const app = express();
const PORT = process.env.FASTDOWNER_BACKEND_PORT || 4001;

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("tiny"));

app.get("/api/v1/health", (req, res) => {
  res.json({ ok: true, backend: "fastdowner", ts: Date.now() });
});

app.use("/api/v1/info", infoRouter);
app.use("/api/v1/download", downloadRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`[fastdowner-backend] listening on http://127.0.0.1:${PORT}`);
});
