import { Router } from "express";
import { 
    getRandomQuote,
    getQuotes,
    getQuoteOfTheDay,
    getRandomImage
 } from "../controllers/quoteControllers.js";

const router = Router();

router.get("/random", getRandomQuote);
router.get("/", getQuotes);
router.get("/today", getQuoteOfTheDay);
router.get("/image", getRandomImage);

// Export the router to be used in app.ts
export default router;