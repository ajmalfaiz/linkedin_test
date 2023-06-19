const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req?.body);
  try {
    const response = await fetch(req.body?.url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

router.post("/test", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      {
        method: "GET",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

module.exports = router;
