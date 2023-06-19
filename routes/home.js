const express = require("express");
const axios = require("axios");
const router = express.Router();
const request = require("request");

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
    Accept: "text/html,application/xhtml+xml",
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
  };
  const instance = axios.create();
  instance
    .get(url, { headers })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error("Error fetching COVID data:", error);
      res.status(422).send({ error: error });
    });
});

router.get("/proxy", function (req, res, next) {
  try {
    request({
      uri: "https://jsonplaceholder.typicode.com/posts/",
    }).pipe(res);
  } catch (err) {
    res.status(422).json({ err: err });
  }
});

module.exports = router;
