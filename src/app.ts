import express from "express";
import quoteRoutes from "./routes/quoteRoutes"; // pakai .js jika ESM
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Rate limiter: mencegah abuse & overload
app.use(rateLimit({
  windowMs: 1 * 60 * 1000, // 1 menit
  max: 100, // 100 request per IP per menit
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
  handler: (req, res, _next, options) => {
    // Logging IP yang kena limit
    console.warn(`Rate limit exceeded by IP: ${req.ip} - ${req.method} ${req.originalUrl}`);
    res.status(options.statusCode).json(options.message);
  }
}));
// seq 1000 | xargs -n1 -P10 curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/api/quotes/random

app.use("/api/quotes", quoteRoutes);

app.get("/", (_req, res) => {
  res.json({ message: "Quote API is running!" });
});

export default app;