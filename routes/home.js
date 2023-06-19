const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req?.body);
  try {
    const response = await fetch(req.body?.url, {
      headers: {
        Accept: "application.json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = response.json();
    return res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

router.get("/test", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

module.exports = router;
