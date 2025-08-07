import { httpGet } from "../utils/httpClient.js";
import type { Quote } from "../types/quote";

// 50 random quotes
export async function fetchQuotes(): Promise<Quote[] | null> {
  try {
    return await httpGet<Quote[]>("https://zenquotes.io/api/quotes");
  } catch {
    return null;
  }
}

// Quote of the day
export async function fetchQuoteOfTheDay(): Promise<Quote | null> {
  try {
    const data = await httpGet<Quote[]>("https://zenquotes.io/api/today");
    return data[0] ?? null;
  } catch {
    return null;
  }
}

// Random quote
export async function fetchRandomQuote(): Promise<Quote | null> {
  try {
    const data = await httpGet<Quote[]>("https://zenquotes.io/api/random");
    return data[0] ?? null;
  } catch {
    return null;
  }
}

// Random inspirational image (return URL as string)
export async function fetchRandomImage(): Promise<string | null> {
  try {
    // ZenQuotes returns image directly, so we return the URL
    return "https://zenquotes.io/api/image";
  } catch {
    return null;
  }
}