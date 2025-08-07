import type { Request, Response } from "express";
import {
  fetchQuotes,
  fetchQuoteOfTheDay,
  fetchRandomQuote,
  fetchRandomImage,
} from "../services/quoteService.js";

// GET /api/quotes/random
export async function getRandomQuote(_req: Request, res: Response) {
  const quote = await fetchRandomQuote();
  if (!quote) return res.status(502).json({ error: "Failed to fetch quote" });
  res.json(quote);
}

// GET /api/quotes
export async function getQuotes(_req: Request, res: Response) {
  const quotes = await fetchQuotes();
  if (!quotes) return res.status(502).json({ error: "Failed to fetch quotes" });
  res.json(quotes);
}

// GET /api/quotes/today
export async function getQuoteOfTheDay(_req: Request, res: Response) {
  const quote = await fetchQuoteOfTheDay();
  if (!quote) return res.status(502).json({ error: "Failed to fetch quote of the day" });
  res.json(quote);
}

// GET /api/quotes/image
export async function getRandomImage(_req: Request, res: Response) {
  const url = await fetchRandomImage();
  if (!url) return res.status(502).json({ error: "Failed to fetch image" });
  res.json({ url });
}