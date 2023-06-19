const express = require("express");
const axios = require("axios");
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
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error });
  }
});

router.get("/test", async (req, res, next) => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const headers = {
    "Content-Type": "application/json",
  };
  const instance = axios.create();
  instance
    .get(url, { headers })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error("Error fetching COVID data:", error);
      res.status(401).send({ error: error });
    });
});

module.exports = router;
