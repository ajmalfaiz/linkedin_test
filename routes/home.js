const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req?.body);
  try {
    const response = await fetche(req.body?.url, {
      headers: {
        Accept: "application.json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = response.json();
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

router.get("/test", async (req, res, next) => {
  const url = ' "https://disease.sh/v3/covid-19/historical/all?lastdays=all"';
  axios
    .get(url)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error fetching COVID data:", error);
      res.status(500).json({ error: error});
    });
});

module.exports = router;
