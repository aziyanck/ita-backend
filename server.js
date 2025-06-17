const express = require("express");
const cors = require("cors");
require("dotenv").config();
const getGoogleReviews = require("./services/getGoogleReviews");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/google-reviews", async (req, res) => {
  const PLACE_ID = "ChIJMZ9YzabFADsRkYuobf0P7Ug";
  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const reviews = await getGoogleReviews(PLACE_ID, API_KEY, 4);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
